git log -1 --pretty --oneline > ./scripts/.cache-log;

preTag=`cat ./scripts/.cache-log | grep -Eio "^\w+\b"`;
preMsg=`cat ./scripts/.cache-log | grep -Eio "\>.*$"`;

rm -rf ./scripts/.cache-log


# 执行脚本。。。

git add .
git commit –amend

# git diff --name-only > ./scripts/.cache-log