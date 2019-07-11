#!/usr/bin/env bash

echo """
--------------------------------
git status -->
$(git status)
--------------------------------
link_cli.sh exec path --> $(pwd)
--------------------------------
"""
lerna exec pwd --since develop | grep cli
if [[ "$?" -eq 0 ]]; then
    npm link packages/cli
fi
