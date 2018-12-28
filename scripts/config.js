const tplHeader = `
| ID | Title | Answer | Difficulty |
|:--:|:------|:------:|:----------:|\n`;

module.exports = {
  answerDir: './answer/',
  readmeFile: './README.md',

  problem: {
    originPath: 'https://leetcode.com/api/problems/all/',
    insertPoint: /(?<=<!--.*problemS.*-->)[\s\S]*(?=<!--.*problemE.*-->)/gm,
    template: '|{{id}}|[{{title}}](https://leetcode.com/problems/{{camelCase}})|[{{solutions}}](./answer/{{id}})|{{difficulty}}|',
    strPad: {
      id: [[4, '0']],
    },
    tplHeader,
  },

  statistics: {
    template: `|Easy|Medium|Hard|<h3>Total</h3>|
|:-:|:-:|:-:|:-:|
|{{easy}}|{{medium}}|{{hard}}|<h3>{{total}}</h3>|`,
    insertPoint: /(?<=<!--.*statisticsS.*-->)[\s\S]*(?=<!--.*statisticsE.*-->)/gm,
  },

  contributor: {
    originApi() {
      const accessToken = Buffer.from('NTAzOGE1NzdlZWE2ZTNkMjU5ZWYyNTY4YmVjZTUxZDg0N2FiNDlhZQ', 'base64').toString();
      return `https://api.github.com/repos/kkxujq/leetcode/contributors?access_token=${accessToken}`;
    },
    insertPoint: /(?<=<!--.*contributorsS.*-->)[\s\S]*(?=<!--.*contributorsE.*-->)/gm,
    template: [
      '|<a href="https://github.com/{{login}}"><img alt="{{login}}" src="{{avatar_url}}&s=60"/><br>{{login}}</a>',
      '|:-:',
      '|<a href="https://github.com/kkxujq/leetcode/graphs/contributors">{{contributions}}<br>contributions</a>',
    ],
  },

  rank: {
    insertPoint: /(?<=<!--.*rankS.*-->)[\s\S]*(?=<!--.*rankE.*-->)/gm,
    template: '{{ranking}} {{lang}} {{solid}}{{blank}}{{count}}/{{total}}',
    strPad: {
      lang: [[10, ' ']],
      count: [[4]],
    },
    fillBar: 70,
    rankSymbol: ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣'],
  },

  stamp: {
    insertPoint: /(?<=<!--.*stampS.*-->)[\s\S]*(?=<!--.*stampE.*-->)/gm,
    template: '[![Progress](http://progressed.io/bar/{{count}}?title=done)](https://leetcode.com/problemset/all/)',
  },

  readmeTemplate: `Problem: :link: 
- [:cn:中文](https://leetcode-cn.com/problems/{{camelCase}})
- [:us:English](https://leetcode.com/problems/{{camelCase}})`,
};
