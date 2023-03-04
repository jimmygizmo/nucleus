#! /usr/bin/env zsh
# ./auto/push-020-docker-aws-ecr-auth--docker-login.zsh

echo
echo "################################"
date
echo "################################"
echo

AWS_ECR_PASSWORD=$(aws ecr get-login-password --region us-west-2)

sleep 1

docker login -u AWS -p $AWS_ECR_PASSWORD https://your_aws_account_id_here.dkr.ecr.us-west-2.amazonaws.com

