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
docker push your_aws_account_id_here.dkr.ecr.us-west-2.amazonaws.com/your_aws_repo_name_here:nucleus-mongo

