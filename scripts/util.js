const {resolve, join} = require('path');
const {writeFile, readFileSync, readdirSync, statSync, existsSync} = require('fs');
const {get: GET, request: REQUEST} = require('https');
const {stringify, parse} = JSON;
const {parse: urlParse} = require('url');

const preLink = 'https://leetcode.com/problems/';


const FILE_TYPE_MAP = {
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
  constructor() {
    this.fileName = join(__dirname, '.cache');

    if (!existsSync(this.fileName)) {
      writeFile(this.fileName, stringify({}), err => {
        if (err) throw err;
      });

      this.cacheData = {};
      return this;
    }

    this.cacheData = parse(readFileSync(this.fileName).toString() || '{}');
    this.init();
  }

  init() {
    const _current = new Date();

    for (const [key, {expires}] of Object.entries(this.cacheData)) {
      const _expires = new Date(expires);

      if (_current >= _expires) {
        delete this.cacheData[key];
      }
    }

    writeFile(this.fileName, stringify(this.cacheData, null, 2), err => {
      if (err) throw err;
    });
  }

  setItem(key, val, maxAge) {
    const _data = {
      data: val,
      expires: new Date(Date.now() + maxAge * 1000),
    };

    this.cacheData[key] = _data;

    writeFile(this.fileName, stringify(this.cacheData, null, 2), err => {
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
 * Http
 */
class Http extends Storage {
  constructor() {
    super();
  }

  get(url, {maxAge} = {}) {
    if (maxAge && super.getItem(url)) {
      return Promise.resolve(super.getItem(url));
    }

    return new Promise((resolve, reject) => {
      GET(url, resp => {
        log('HTTP get: ', url);

        let data = '';

        resp.on('data', chunk => data += chunk);

        resp.on('end', () => {
          log('HTTP get: ', 'SUCCESS!');
          const _data = parse(data.toString());

          resolve(_data);

          if (maxAge) {
            super.setItem(url, _data, maxAge);
          }
        });

      }).on('error', err => {
        log('HTTP get: ', 'FAILED!');
        reject(err);
      });
    });
  }

  request(urlOpt, opts = {}) {
    let options;
    if (typeof urlOpt === 'string') {
      options = Object.assign(urlParse(urlOpt), opts);
    }

    return new Promise((resolve, reject) => {
      let data = '';

      const req = REQUEST(options, resp => {
        resp.on('data', chunk => {
          data += chunk;
        });

        resp.on('end', () => {
          log('HTTP request: ', 'SUCCESS!');
          const _data = parse(data.toString());

          resolve(_data);
        });
      });

      req.on('error', err => {
        log('HTTP request: ', 'FAILED!');
        reject(err);
      });

      req.end();
    });
  }
}

/**
 * DirList
 */
class DirList {
  constructor(path = './') {
    this.path = resolve(path);

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

        if (match && match[0].toLowerCase() in FILE_TYPE_MAP) {
          fileTypes.push(match[0].toLowerCase());
        }
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
 * appendFile
 * @param oldFileText
 * @param insertPoint
 * @param tplContent
 * @returns {string | * | void}
 */
function appendFile(oldFileText, insertPoint, tplContent) {
  return oldFileText.replace(insertPoint, tplContent);
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

/**
 * Template engine
 * @param tpl
 * @param data
 * @returns {string}
 */
function render(tpl = '', data = {}) {
  return tpl.replace(/\{\{(\S+?)\}\}/g, (match, p) => data[p]);
}

/**
 * Beautify the string
 * @param target
 * @param [[], []]
 * @returns {string | *}
 */
function padStrBeauty(target, [
    [start = 0, symbolS = ' '] = [],
    [end = 0, symbolE = ' '] = [],
  ] = []) {

  target = target.toString();

  if (start) target = target.padStart(start, symbolS);
  if (end) target = target.padEnd(end, symbolE);

  return target;
}

/**
 * Array flatten
 * @param arr
 * @returns {*}
 */
function arrayFlatten(arr = []) {
  if ('flat' in Array.prototype) return Array.prototype.flat.call(arr);

  while (arr.some(a => Array.isArray(a))) {
    arr = [].concat(...arr);
  }

  return arr;
}

module.exports = {
  DirList,
  Http,
  rowTpl,
  appendFile,
  log,
  render,
  arrayFlatten,
  padStrBeauty,
  FILE_TYPE_MAP,
  LEVEL_MAP,
};