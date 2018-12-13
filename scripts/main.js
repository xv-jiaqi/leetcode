const { readFileSync, writeFile } = require('fs');
const { DirList, Http, rowTpl, appendFile, log } = require('./util');

const {
  originPath,

  readmeFile,
  insertPoint,
  tplHeader,
  padding,

  answerDir,
} = require('./config');

const http = new Http();
const originQuestions = http.get(originPath, { maxAge: 3600 * 24 * 7 });

const answerDirs = new DirList(answerDir);

originQuestions.then(resp => {
  const { stat_status_pairs: questionList } = resp;

  const tplText = questionList
    .sort((p, c) => p.stat.question_id - c.stat.question_id)
    .map(q => {
      const {
        stat: {
          question_id: id,
          question__title: title,
          question__title_slug: camelCase,
        },
        difficulty: {
          level: difficulty,
        },
      } = q;

      return rowTpl({
        id,
        title,
        camelCase,
        difficulty,
        solutionList: answerDirs.dirList,
        solutionListFileTypes: answerDirs.getFileTypes(),
        padding,
      });
    }).join('\n');

  const oldFileText = readFileSync(readmeFile, 'utf8');

  const newFileText = appendFile(oldFileText, insertPoint, tplHeader, tplText);

  writeFile(readmeFile, newFileText, err => {
    if (err) throw err;

    log('File writing: ', 'SUCCESS!');
  });
});
