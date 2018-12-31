#! /usr/bin/bash

# name map
declare map=(["kongtong"]="inJs" ["kkxujq"]="kkxujq" ["linzhming27"]="linningmii" ["zyct"]="zy445566")

function getdirfile() {
  for file in $1
  do
      if test -f $file
      then
          arr=(${arr[*]} $file)
      else
          for subfile in $file/*
          do
              if test -f $subfile
              then
                  arr=(${arr[*]} $subfile)
              fi
          done
      fi
  done
}

getdirfile '../answer/*'

echo "THIS IS ALL ANSWER LOGS\n" > .answer-log

for ansFile in ${arr[@]}
do
  # echo "$ansFile" >> .answer-log
  # git log --pretty=format:"%h|[author]%an|[user]%cn|[email]%ae|%ad|%s" --date=format:'%Y-%m-%d %H:%M:%S' --reverse $answer >> .answer-log
  # echo "\n" >> .answer-log

  filename=`echo $ansFile | grep -E -i -o "[[:digit:]]+[a-z|\.\'\-\_]+$" | tr 'A-Z' 'a-z'`

  id=`echo $filename | grep -E -o '[1-9]+[0-9]*'`
  lang=`echo $filename | grep -E -o -i '[[:lower:]]+$'`
  comment=`echo $filename | grep -E -o -i '\.{1}.*\.{1}'`


  # printf "%-34s 【filename】: %-18s | id: %-4s lang: %-4s comment: %-8s\n" $ansFile $filename $id $lang $comment
  printf "%-34s 【filename】: %-18s | id: %-4s lang: %-4s comment: %-8s\n" $ansFile $filename $id $lang $comment >> .answer-log

  ename=`git log --pretty=format:"%ae" --reverse $ansFile | grep -E -o -i -m 1 '^[[:lower:]|[:digit:]|[:upper:]|\.]+' | head -1 | sed 's/\.//g'`

  echo "$ename  ${map[$ename]}"

  dir=`echo $ansFile | grep -E -o '.+\/'`
  newName="$dir$id.$lang"

  mv $ansFile $newName

done

