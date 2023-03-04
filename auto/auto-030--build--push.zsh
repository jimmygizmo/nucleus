#! /usr/bin/env zsh
# auto-030--build--push.zsh

# THIS SCRIPT MUST BE RUN FROM THE PROJECT ROOT DIRECTORY.

# This script is a convenient shortcut for building the full stack of images from source,
# and then pushing the full stack of images, all in one automated process.


echo "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
echo "RELEASE: BUILD ALL. PUSH ALL."
echo


echo "---->  ./auto/auto-010--build.zsh"
echo
./auto/auto-010--build.zsh

sleep 1
echo

echo "---->  ./auto/auto-020--push.zsh"
echo
./auto/auto-020--push.zsh

