#! /usr/bin/env zsh
# ./auto/push-050-nginx--push-nginx.zsh

# Before this push, you must have successfully performed Docker login.

echo
echo "################################"
date
echo "################################"
echo

echo "---->  ./auto/push-050-nginx--push-nginx.zsh"

# Push the NGINX image: nucleus-nginx
docker push 388277783555.dkr.ecr.us-west-2.amazonaws.com/atomonova-repo:nucleus-nginx

