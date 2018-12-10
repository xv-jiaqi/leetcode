const { resolve, join } = require('path');
const { writeFile, readFileSync, readdirSync, statSync, existsSync } = require('fs');
const { get: GET } = require('https');
const { stringify, parse } = JSON;

const preLink = 'https://leetcode.com/problems/';

const TYPE_MAP = {
  'js': 'JavaScript',
  'ts': 'TypeScript',
  'py': 'Python',
  'go': 'Go',
  'c': 'C',
  'cpp': 'C++',
  'java': 'Java',
};

const LEVEL_MAP = {
  1: 'Easy',
  2: 'Medium',
  3: 'Hard',
};
class Storage {
  constructor(){
    this.fileName = join(__dirname, '.cache');

    if (!existsSync(this.fileName)) {
      writeFile(this.fileName, stringify({}), err => {
        if (err) throw err;
      });

      this.cacheData = {};
      return this;
    }

    this.cacheData = parse(readFileSync(this.fileName));
    this.init();
  }

  init () {
    const _current = new Date();

    for (const [key, {expires}] of Object.entries(this.cacheData)) {
      const _expires = new Date(expires);

      if (_current >= _expires) {
        delete this.cacheData[key];
      }
    }

    writeFile(this.fileName, stringify(this.cacheData, null, 4), err => {
      if (err) throw err;
    });
  }

  setItem(key, val, maxAge) {
    const _data = {
      data:  val,
      expires: new Date(Date.now() + maxAge * 1000),
    };

    this.cacheData[key] = _data;

    writeFile(this.fileName, stringify(this.cacheData, null, 4), err => {
      if (err) throw err;
    });
  }

  getItem(key) {
    if (!(key in this.cacheData)) {
      return false;
    }

    return this.cacheData[key].data;
  }
}

/**
 * DirList
 */
class DirList {
  constructor(path = './') {
    this.path = resolve(path);
    console.log(this.path);

    this.getDirList();
  }

  getDirList() {
    this.dirList = readdirSync(this.path);
  }

  getFileTypes() {
    const map = {};

    this.dirList.forEach(p => {
      map[p] = DirList.getFileTypes(p, this.path);
    });

    return map;
  }

  static getFileTypes(curPath, root = this.path) {
    let fileTypes = [];

    const dirs = readdirSync(resolve(root, curPath));

    dirs.forEach(d => {
      const dir = resolve(root, curPath, d);

      if (statSync(dir).isDirectory()) {
        fileTypes = fileTypes.concat(this.getFileTypes(dir, root));
      } else {
        const match = /(?<=.+\.)\w+/i.exec(d);

        fileTypes.push(match ? match[0].toLowerCase() : d);
      }
    });

    return [...new Set(fileTypes)];
  }

  getIds() {
    return this.dirList.map(id => Number.parseInt(id.replace(/^0*/, '')));
  }

  isValid() {
    return this.dirList.every(id => id.length === 4);
  }
}

/**
 * Http
 */
class Http extends Storage{
  constructor() {
    super();
  }

  get(url, { maxAge}) {
    if (maxAge && super.getItem(url)) {
      console.log(123);
      return Promise.resolve(super.getItem(url));
    }

    return new Promise((resolve, reject) => {
      GET(url, resp => {
        log('HTTP get: ', url);

        let data = '';

        resp.on('data', (chunk) => data += chunk);

        resp.on('end', () => {
          log('HTTP get: ', 'SUCCESS!');
          const _data = parse(data.toString());

          resolve(_data);

          if (maxAge) {
            super.setItem(url, _data, maxAge);
          }
        });

      }).on('error', (err) => {
        log('HTTP get: ', 'FAILED!');
        reject(err)
      });
    });
  }

  post() {}
}

/**
 * readme.md each row
 * @param id
 * @param title
 * @param camelCase
 * @param difficulty
 * @param solutionList
 * @param solutionListFileTypes
 * @param padding
 * @returns {string}
 */
function rowTpl({id, title, camelCase, difficulty, solutionList, solutionListFileTypes, padding}) {

  const { idPad, titlePad, answerPad, difficultyPad } = padding;

  const _id = id.toString().padStart(idPad, '0'),
    _title = `[${title}](${preLink}${camelCase})`.padEnd(titlePad),
    _difficulty = LEVEL_MAP[difficulty].padEnd(difficultyPad),
    _solution = solutionList.includes(_id)
      ? solutionListFileTypes[_id]
        .map(s => (s in TYPE_MAP) ? `[${TYPE_MAP[s]}](./answer/${_id})` : '')
        .filter(t => t)
        .join(', ')
      : `TODO`;

    return `|${_id}|${_title}|${_solution}|${_difficulty}|`;
}

/**
 * Assembly readme.md
 * @param oldFileText
 * @param insertPoint
 * @param tplHeader
 * @param tplContent
 * @returns {string | * | void}
 */
function appendFile(oldFileText, insertPoint, tplHeader, tplContent) {
  return oldFileText.replace(insertPoint, `${tplHeader}${tplContent}`);
}

/**
 * log
 * @param label
 * @param content
 * @param options
 */
function log(label, content, options) {
  console.log('\x1b[1m%s\x1b[31m%s\x1b[0m', label, content);
}

module.exports = {
  DirList,
  Http,
  rowTpl,
  appendFile,
  log,
};