const { readFileSync, writeFile } = require('fs');
const { DirList, Http, rowTpl, appendFile, log, render, arrayFlatten, padStrBeauty, FILE_TYPE_MAP} = require('./util');
const { answerDir, readmeFile, problem, statistics, contributor, rank } = require('./config');

const http = new Http();

const problems = http.get(problem.originPath, {maxAge: 3600 * 24 * 7});
const contributors = http.request(contributor.originApi, {
  headers: {'user-agent': 'node.js'},
});

const answerDirs = new DirList(answerDir);
const answerFileTypes = answerDirs.getFileTypes();

const pRank = Promise.resolve(rankProcess());
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
const pProblems = problems.then(resp => {
  const { insertPoint, tplHeader, padding, template } = problem;
  const { stat_status_pairs: questionList } = resp;

  const tplText = questionList
    .sort((p, c) => p.stat.question_id - c.stat.question_id)
    .map(q => {
      const {
        stat: { question_id: id,  question__title: title, question__title_slug: camelCase },
        difficulty: { level: difficulty }
      } = q;

    // '|{{id}}|[{{title}}](https://leetcode.com/problems/{{camelCase}})|[{{solutions}}](./answer/{{id}})|{{difficulty}}|'

      return render(template, { id, title, camelCase, difficulty, solutions: 123 })

      // return rowTpl({ id, title, camelCase, difficulty, solutionList: answerDirs.dirList, solutionListFileTypes: answerFileTypes, padding });
    }).join('\n');

  console.log(tplText);

  return {
    renderTemplate: `${tplHeader}${tplText}\n`,
    insertPoint,
  };
});

// pProblems.then(p => console.log(p));
//
// return;

mountTemplate([pRank, pContributors, pProblems]);

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

  let rankList = [], srcData;

  const fillSymbol = '■', blankSymbol = '□', fileTotal = fileTypes.length;

  Object.entries(FILE_TYPE_MAP).forEach(([short, lang], index) => {
    const count = fileTypes.filter(t => t === short).length;
    const ranking = rankSymbol[index] || index + 1;
    let solid = fillBar, blank = '';

    if (index > 0) {
      solid = Math.ceil((count / fileTotal) * fillBar);
      blank = fillBar - solid;
    }

    solid = fillSymbol.repeat(solid);
    blank = blankSymbol.repeat(blank);

    srcData = {ranking, lang, solid, blank, count, total: fileTotal};

    for (const [target, padRule] of Object.entries(strPad)) {
      srcData[target] = padStrBeauty(srcData[target], padRule);
    }

    if (count) {
      rankList.push(srcData);
    }
  });

  rankList = rankList.sort((p, c) => c.solid.length - p.solid.length)
    .map(d => render(template, d));

  return {
    renderTemplate: `\n${rankList.join('\n')}\n`,
    insertPoint,
  };
}
