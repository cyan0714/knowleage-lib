#!/usr/bin/env sh

git add .

message=$1

git commit -m "${message}"

git push origin master

echo "代码提交成功 🎉🎉🎉"
