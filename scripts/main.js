const { resolve } = require('path');
const { readFileSync, writeFile, existsSync } = require('fs');
const { DirList, Http, appendFile, log, render, arrayFlatten, padStrBeauty, FILE_TYPE_MAP, LEVEL_MAP } = require('./util');
const { answerDir, readmeFile, problem, statistics, contributor, rank, stamp, readmeTemplate } = require('./config');

const http = new Http();
const problems = http.get(problem.originPath, { maxAge: 3600 * 24 * 7 });
const contributors = http.request(contributor.originApi, {
  headers: { 'user-agent': 'node.js' },
});

const answerDirs = new DirList(answerDir);
const answerFileTypes = answerDirs.getFileTypes();
const problemsList = problemsProcess();

const pContributors = contributors.then(cons => {
  const { template, insertPoint } = contributor;

  const tpl = template.map(tpl =>
    cons.map(c =>
      render(tpl, c)).join(''),
  ).map(t => `${t}|`).join('\n');

  return {
    renderTemplate: `\n${tpl}\n`,
    insertPoint,
  };
});

const pRank = Promise.resolve(rankProcess());
const pStatistics = Promise.resolve(statisticsProcess());
const pStamp = stampProcess();
const pProblems = problemProcess();

buildAnswerDocs();

mountTemplate([pContributors, pProblems, pRank, pStatistics, pStamp]);

/**
 * mount template
 * @param AllTask
 */
function mountTemplate(AllTask) {
  let text = readFileSync(readmeFile, 'utf8');

  Promise.all(AllTask).then(taskQuery => {
    taskQuery.forEach(({
                         renderTemplate,
                         insertPoint,
                       }) => {
      text = appendFile(text, insertPoint, renderTemplate);
    });
  }).finally(() => {
    writeFile(readmeFile, text, err => {
      if (err) throw err;

      log('File writing: ', 'SUCCESS!');
    });
  });
}

function rankProcess() {
  const { template, insertPoint, strPad, fillBar, rankSymbol } = rank;
  const fileTypes = arrayFlatten(Object.values(answerFileTypes));
  const fillSymbol = '■', blankSymbol = '□', fileTotal = fileTypes.length;

  const fileType = [...new Set(fileTypes)]
    .map(t => [t, fileTypes.filter(f => f === t).length])
    .sort(([, pCount], [, cCount]) => cCount - pCount);

  let rankList = fileType.map(([lang, count], index) => {
    const ranking = rankSymbol[index] || index + 1;
    let solid = fillBar, blank = '';
    lang = FILE_TYPE_MAP[lang];

    solid = Math.ceil((count / fileTotal) * fillBar);
    blank = fillBar - solid;

    solid = fillSymbol.repeat(solid);
    blank = blankSymbol.repeat(blank);

    const srcData = { ranking, lang, solid, blank, count, total: fileTotal };

    for (const [target, padRule] of Object.entries(strPad)) {
      srcData[target] = padStrBeauty(`${srcData[target]}`, padRule);
    }

    return render(template, srcData);
  });

  return {
    renderTemplate: `\n${rankList.join('\n')}\n`,
    insertPoint,
  };
}

async function problemProcess() {
  const { insertPoint, tplHeader, template, strPad } = problem;
  let problemList;

  try {
    problemList = await problemsList;
  } catch (e) {
    throw e;
  }

  const tpl = problemList.map(({ id, title, camelCase, difficulty, solution }) => {
    const srcData = { id, title, camelCase, difficulty, solutions: solution.join(', ') };
    for (const [target, padRule] of Object.entries(strPad)) {
      srcData[target] = padStrBeauty(srcData[target], padRule);
    }

    return render(template, srcData);
  });

  return {
    renderTemplate: `${tplHeader}${tpl.join('\n')}\n`,
    insertPoint,
  };
}

async function stampProcess() {
  const { template, insertPoint } = stamp;
  const allAnswerNum = answerDirs.dirList.length;
  let allProblemsNum = allAnswerNum;

  try {
    const allProblems = await problems;
    allProblemsNum = allProblems.stat_status_pairs.length;
  } catch (e) {
    throw e;
  }

  const data = {
    count: Math.ceil(allAnswerNum / allProblemsNum),
  };

  return {
    renderTemplate: `\n${render(template, data)}`,
    insertPoint,
  };
}

async function statisticsProcess() {
  const { template, insertPoint } = statistics;
  let problemList, easy = 0, medium = 0, hard = 0, total = 0;

  try {
    problemList = await problemsList;
  } catch (e) {
    throw e;
  }

  problemList.forEach(({ difficulty, solution }) => {
    if (solution.length) {
      total++;
      switch (difficulty) {
        case 'Easy':
          easy++;
          break;
        case 'Medium':
          medium++;
          break;
        case 'Hard':
          hard++;
        default:
      }
    }
  });

  const tpl = render(template, { easy, medium, hard, total });

  return {
    renderTemplate: `\n${tpl}\n`,
    insertPoint,
  };
}

async function problemsProcess() {
  const solutions = answerFileTypes;
  let problemList;

  try {
    problemList = await problems;
  } catch (e) {
    throw e;
  }

  const { stat_status_pairs: questionList } = problemList;

  return questionList.map((
    {
      stat: { question_id: id, question__title: title, question__title_slug: camelCase },
      difficulty: { level: difficulty },
    }) => {

    difficulty = LEVEL_MAP[difficulty];
    const padId = id.toString().padStart(4, '0');
    const solution = (padId in solutions)
      ? solutions[padId].map(s => FILE_TYPE_MAP[s])
      : [];

    return { id, title, camelCase, difficulty, solution };
  }).sort((pId, cId) => pId.id - cId.id);
}

async function buildAnswerDocs() {
  let problemList;

  try {
    problemList = await problemsList;
  } catch (e) {
    throw e;
  }

  Object.keys(answerFileTypes).forEach(dir => {
    const path = resolve(process.cwd(), 'answer', dir, 'README.md');

    if (!existsSync(path)) {
      const [{ camelCase } = {}] = problemList.filter(p => p.id === +dir);

      const tpl = render(readmeTemplate, { camelCase });

      writeFile(path, tpl, err => {
        if (err) throw err;
      });
    }
  });
}