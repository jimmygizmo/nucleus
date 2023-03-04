#! /usr/bin/env zsh
# Use this script on MacOS. Run it from within the project root directory.
# The Dockerfile at /apollo/Dockerfile will be built.
# The image will be built and then tagged with the AWS ECR repository URL and image name.

echo
echo "################################"
date
echo "################################"
echo

docker build -t 388277783555.dkr.ecr.us-west-2.amazonaws.com/atomonova-repo:nucleus-apollo apollo

# From within /apollo/ you can run it with:
# zsh ../auto/build-042-docker-build-tag--apollo.zsh .

# The preferred method is to run this script from the project root.

