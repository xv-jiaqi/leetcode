#!/usr/local/bin/python3
import re
import sys
from os import path, rename, getcwd
from subprocess import getoutput

LOG_FILE = './.script.log'
FILE_TYPE_DICT = {
  'js': 'JavaScript',
  'ts': 'TypeScript',
  'py': 'Python',
  'go': 'Go',
  'c': 'C',
  'cpp': 'C++',
  'java': 'Java',
  'sql': 'SQL',
  'swift': 'Swift',
  'sh': 'Shell',
  'rb': 'Ruby',
  'scala': 'Scala',
  'kt': 'kotlin',
  'rs': 'Rust',
  'php': 'PHP'
}
CONTRIBUTOR_DICT = {
  'kongtong@wacai.com': 'inJs',
  'kkxujq@163.com': 'kkxujq',
  'zyct@vip.qq.com': 'zy445566',
  'rocco.mormont@gmail.com': 'zh-rocco',
  'herman.lzm@alibaba-inc.com': 'linningmii',
  'lin.zh.ming.27@gmail.com': 'linningmii'
}

gitStatusLog = getoutput('git status -s')
gitUserEmail = getoutput('git config user.email')
gitUserName = CONTRIBUTOR_DICT.get(gitUserEmail)

def lintFileName(src, dst, id):
  prefix = getcwd()
  src = '/'.join([prefix, 'answer', id, src])
  dst = '/'.join([prefix, 'answer', id, dst])

  if path.exists(src):
    rename(src, dst)

def checkFileName(id, info, type):
  if gitUserEmail == None:
    return

  shortId = str(int(id))
  standard = shortId + '.' + gitUserName

  if info.find(standard, 0) == 0:
    return

  lintInfo = None
  if re.match(r'^\d+$', info) and (re.match(r'^\d+$', info).group() == info):
    lintInfo = ''
  elif re.search(r'^\d+(?=(\.[\w\.]+)?$)', info) and int(re.search(r'^\d+(?=(\.[\w\.]+)?$)', info).group()) == int(shortId):
    lintInfo = info.replace(shortId, '') if info.find(shortId + '.', 0) < -1 else info.replace(shortId + '.', '')

  src = '.'.join([info, type])
  dst = '.'.join(list(filter(lambda item: bool(item), [shortId, gitUserName, lintInfo, type])))

  lintFileName(src, dst, id)

regexp = re.compile(r'(?<=\banswer\/)(\d{4})\/([\w|\.]+)\.(\w+\b)', re.I)
changedFiles = regexp.finditer(gitStatusLog)

while True:
  try:
    matchSplit = next(changedFiles)
    id = matchSplit.group(1)
    info = matchSplit.group(2)
    type = matchSplit.group(3).lower()

    if type not in FILE_TYPE_DICT:
      continue

    checkFileName(id, info, type)
  except StopIteration:
    sys.exit()
