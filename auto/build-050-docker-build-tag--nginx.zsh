#! /usr/bin/env zsh
# Use this script on MacOS. Run it from within the project root directory.
# The Dockerfile at /nginx/Dockerfile will be built.
# The image will be built and then tagged with the AWS ECR repository URL and image name.

echo
echo "################################"
date
echo "################################"
echo

docker build -t your_aws_account_id_here.dkr.ecr.us-west-2.amazonaws.com/your_aws_repo_name_here:nucleus-nginx nginx

# From within /nginx/ you can run it with:
# zsh ../auto/build-050-docker-build-tag--nginx.zsh .

# The preferred method is to run this script from the project root.

