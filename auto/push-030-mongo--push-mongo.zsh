#! /usr/bin/env zsh
# ./auto/push-030-mongo--push-mongo.zsh

# Before this push, you must have successfully performed Docker login.

echo
echo "################################"
date
echo "################################"
echo

echo "---->  ./auto/push-030-mongo--push-mongo.zsh"

# Push the MongoDB image: nucleus-mongo
docker push 388277783555.dkr.ecr.us-west-2.amazonaws.com/atomonova-repo:nucleus-mongo

