#!/bin/bash
#notify-send "Echo" $@
/home/username/.nvm/versions/node/v12.18.0/bin/node ~/.local/share/open-by-domain/openbydomain.js "$@" >> ~/.local/share/open-by-domain/openbydomain.log
