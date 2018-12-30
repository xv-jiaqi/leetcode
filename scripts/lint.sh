#！/usr/bash

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

  #echo ${arr[@]} > .log
}

getdirfile '../answer/*'


echo "THIS IS ALL ANSWER LOGS\n" > .answer-log

for ansFile in ${arr[@]}
do
  # echo "$ansFile" >> .answer-log
  # git log --pretty=format:"%h|[author]%an|[user]%cn|[email]%ae|%ad|%s" --date=format:'%Y-%m-%d %H:%M:%S' --reverse $answer >> .answer-log
  # echo "\n" >> .answer-log

  filename=`echo $ansFile | grep -E -i -o '\/{1}[[:digit:]]+[a-z|\.]+$' | tr 'A-Z' 'a-z'`

  id=`echo $filename | grep -E -o '[1-9]+[0-9]+'`
  comment=``
  lang=`echo $filename | grep -E -o -i '[[:lower:]]+'`
  #log=`git log --pretty=format:"%an--reverse $ansFile`

  echo "$ansFile     $filename | $id $lang" >> .answer-log


done
