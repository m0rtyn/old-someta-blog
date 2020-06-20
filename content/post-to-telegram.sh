#!/bin/bash

main() {
    local CMD=$1
    shift

    case $CMD in
        postToTelegram) publishToTelegram "$@";;
        *) echo "Run as: $0 command
    "; exit;;
    esac
}

publishToTelegram()) {
  FILE_NAME=$1
  echo $FILE_NAME
  FILE_PATH="./_inProgress/${FILE_NAME}"
  echo $FILE_PATH
  TEMP_PATH="./temp.md"
  
  node postToTelegram.js $FILE_PATH

  # cat FILE_PATH | 
  # https_proxy=https://151.253.165.70:8080 telegram-send --timeout 50.0 --format markdown --stdin
  cat TEMP_PATH | telegram-send --timeout 50.0 --format markdown --stdin
}

main "$@"