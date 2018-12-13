const tplHeader = `
| ID | Title | Answer | Difficulty |
|:--:|:------|:------:|:----------:|\n`;

const idPad = 4, titlePad = 100, answerPad = 25, difficultyPad = 10;

module.exports = {
  answerDir: './answer/',
  readmeFile: './README.md',

  problem: {
    originPath: 'https://leetcode.com/api/problems/all/',
    insertPoint: /(?<=<!--.*problemS.*-->)[\s\S]*(?=<!--.*problemE.*-->)/gm,
    template: '|{{id}}|[{{title}}](https://leetcode.com/problems/{{camelCase}})|[{{solutions}}](./answer/{{id}})|{{difficulty}}|',
    tplHeader,
    padding: {
      idPad, titlePad, answerPad, difficultyPad
    },
  },

  statistics: {
    template: `|Easy|Medium|Hard|<strong>Total</strong>|
|:-:|:-:|:-:|:-:|
|{{easy}}|{{medium}}|{{hard}}|<strong>{{total}}</strong>|`,
    insertPoint: /(?<=<!--.*statisticsS.*-->)[\s\S]*(?=<!--.*statisticsE.*-->)/gm,
  },

  contributor: {
    originApi: 'https://api.github.com/repos/kkxujq/leetcode/contributors',
    insertPoint: /(?<=<!--.*contributorsS.*-->)[\s\S]*(?=<!--.*contributorsE.*-->)/gm,
    template: [
      '|<a href="https://github.com/{{login}}"><img alt="{{login}}" src="{{avatar_url}}&s=60"/><br>{{login}}</a>',
      '|:-:',
      '|<a href="https://github.com/kkxujq/leetcode/graphs/contributors">{{contributions}}<br>contributions</a>',
    ],
  },

  rank: {
    insertPoint: /(?<=<!--.*rankS.*-->)[\s\S]*(?=<!--.*rankE.*-->)/gm,
    template: '> {{ranking}} {{lang}} {{solid}}{{blank}}{{count}}/{{total}}<br>',
    strPad: {
      lang: [[10]],
      count: [[4]],
    },
    fillBar: 40,
    rankSymbol: ['🥇', '🥈', '🥉'],
  }
};