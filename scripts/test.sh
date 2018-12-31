#! /usr/bin/bash

langArr=(js ts py go c cpp java sql swift)

for lang in ${langArr[@]}
do
   echo $lang
done

echo '----------------------------------------------'

ansFile="../answer/0033/33..js"

filename=`echo $ansFile | grep -E -i -o "[[:digit:]]+[a-z|\.\'\-\_]+$" | tr 'A-Z' 'a-z'`

  id=`echo $filename | grep -E -o '[1-9]+[0-9]*'`
  lang=`echo $filename | grep -E -o -i '[[:lower:]]+$'`
  comment=`echo $filename | grep -E -o -i '\.{1}.*\.{1}'`

  echo $id $lang $comment

  echo '-----------'

log=`git log --pretty=format:"%ae" --reverse $ansFile | grep -E -o -i -m 1 '^[[:lower:]|[:digit:]|[:upper:]|\.]+' | head -1 | sed 's/\.//g'`

dir=`echo $ansFile | grep -E -o '.+\/'`
newName="$dir$log.111.py"
#mv $ansFile $newName

if [ ! $comment ]; then
  echo "IS NULL"
else
  echo "NOT NULL"
fi



declare map=(["linzhming27"]="kkxujq" ["200"]="dfghjk")

#a="${langArr[@]}" | grep -wq "goo" &&  echo "Yes" || echo "No"
#echo $a