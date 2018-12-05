const tplHeader = `
| ID | Title | Answer | Difficulty |
|:--:|:------|:------:|:----------:|\n`;

const idPad = 4, titlePad = 100, answerPad = 25, difficultyPad = 10;

module.exports = {
  originPath: 'https://leetcode.com/api/problems/all/',

  readmeFile: '../README.md',
  insertPoint: /(?<=<!--.*start.*-->)[\s\S]*(?=<!--.*end.*-->)/gm,
  tplHeader,
  padding: {
    idPad, titlePad, answerPad, difficultyPad
  },

  preLink: {
    en: 'https://leetcode.com/problems/',
    cn: 'https://leetcode-cn.com/problems/',
  },

  answerDir: '../answer/'
};