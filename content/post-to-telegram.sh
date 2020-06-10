#!/bin/bash

main() {
    local CMD=$1
    shift

    case $CMD in
        testRegExp) testRegExp "$@";;
        publishPost) publishPost "$@";;
        postToTelegram) postToTelegram "$@";;
        noteToTelegram) noteToTelegram "$@";;
        *) echo "Run as: $0 command
    "; exit;;
    esac
}

testRegExp() {
  FILE=$1
  FILE_PATH="./_inProgress/${FILE}"
  # FILE_CONTENTS=$(cat $FILE_PATH)
  # echo $FILE_CONTENTS

  POST_TITLE=$(grep '^title: .*$' $FILE_PATH)
  POST_DESCRIPTION=$(grep '^description: .*$' $FILE_PATH)

  POST_URL=$(grep -o '\w*/index.md' <<< $FILE)
  echo ${POST_URL:-6}
  echo ${POST_URL}
}

publishPost() {
  FILE=$1
  echo $FILE
  FILE_PATH="./_inProgress/${FILE}"
  DEST_PATH="./posts/${FILE}"
  
  mv FILE_PATH DEST_PATH
}

postToTelegram() {
  FILE=$1
  echo $FILE
  FILE_PATH="./posts/${FILE}"
  # POST_TITLE=
  # POST_DESC=

  cat FILE_PATH | 
  https_proxy=https://151.253.165.70:8080 telegram-send --timeout 50.0 --format markdown --stdin
}

noteToTelegram() { #Done
  FILE=$1
  FILE_PATH="./notes/${FILE}"

  node ./postToTelegram.js ${FILE_PATH}
  cat './temp.md' | 
  https_proxy=https://151.253.165.70:8080 telegram-send --timeout 50.0 --format markdown --stdin
}

main "$@"