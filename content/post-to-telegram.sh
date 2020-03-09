#!/bin/bash

postToTelegram() {
  FILE=$1
  echo $FILE

  cat "./_inProgress/${FILE}" | https_proxy=https://151.253.165.70:8080 telegram-send --timeout 50.0 --format markdown --stdin
}

postToTelegram "$@"