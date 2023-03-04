#! /usr/bin/env zsh
# ./auto/push-010-full-stack--push-all.zsh

# THIS SCRIPT MUST BE RUN FROM THE PROJECT ROOT DIRECTORY.


echo "-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -"
echo "- - - - - - - - PUSH ALL"
echo

echo "---->  ./auto/push-010-full-stack--push-all.zsh"
echo

# AWS ecr get login password and docker login.
./auto/push-020-docker-aws-ecr-auth--docker-login.zsh

sleep 1

# Push the MongoDB image.
./auto/push-030-mongo--push-mongo.zsh

# Push the Apollo image.
./auto/push-040-apollo--push-apollo.zsh

# Push the NGINX image.
./auto/push-050-nginx--push-nginx.zsh

