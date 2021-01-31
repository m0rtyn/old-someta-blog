#!/bin/bash

main() {
    # local CMD=$1
    
    publish "$@" # > ./post-to-telegram.sh publish folder/file.ext

    # shift
    # case $CMD in
    #     # > ./post-to-telegram.sh publish folder/file.ext
    #     publishToTelegram) publish "$@";;
    #     *) echo "Run as: $0 command
    # "; exit;;
    # esac
}

publish() {
  FILE_NAME=$1
  echo "file name: $FILE_NAME"
  FILE_PATH="./_inProgress/${FILE_NAME}"
  echo "file path: $FILE_PATH"

  TEMP_PATH="./temp.md" # node script will write text to temp file
  
  node postToTelegram.js $FILE_PATH

  # cat FILE_PATH | 
  # https_proxy=https://151.253.165.70:8080 telegram-send --timeout 50.0 --format markdown --stdin

  # cat TEMP_PATH | telegram-send --timeout 50.0 --format markdown --stdin
}

main "$@"