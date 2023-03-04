#! /usr/bin/env bash

# Nucleus script to prepare a new EC2 instance for use.
# PART 2 OF 2 - * * * ROOT * * *
# Expects a t2.medium running Amazon Linux.

# THIS SCRIPT MUST BE RUN AS ROOT.

printf "\n\n\n\n#### #### #### ####  UPDATE PACKAGE MANAGER  #### #### #### ####\n\n"


printf "\n#### ROOT ####  yum update -y\n"; yum update -y; printf "\n\n"


printf "\n\n\n\n#### #### #### ####  INSTALL SERVICES  #### #### #### ####\n"
printf "\n\n#### ####  Install Docker\n\n"


# Install Docker
printf "\n#### ROOT ####  amazon-linux-extras install docker\n"; amazon-linux-extras install docker; printf "\n\n"


# Add user 'ec2-user' to supplemental group 'docker'
printf "\n#### ROOT ####  (sudo) usermod -a -G docker ec2-user\n"; usermod -a -G docker ec2-user; printf "\n\n"


# Start Docker
printf "\n#### ####  (sudo) service docker start\n"; service docker start; printf "\n\n"


# Pause and then show the status of the docker service
printf "\n#### ####  sleep 10s\n"; sleep 10s; printf "\n\n"


printf "\n#### ROOT ####  (sudo) service docker status\n"; service docker status; printf "\n\n"


# Show Docker basic information
printf "\n#### ROOT ####  (sudo) docker info\n"; docker info; printf "\n\n"


printf "\n\n\n\n#### #### #### ####  ADDITIONAL SYSTEM SETUP  #### #### #### ####\n\n"

# TODO: Update this filename, if we even use this message:
printf "\n#### ####  Now manually perform the steps documented in the file: ec2-setup-02-manual-finalization.txt\n"


##
#
### OLD NOTES:
# I don't have any lingering Docker issues and I think the following was addressing
# an issue which had some unrelated (dumb) cause. So this is not relevant,
# but I will not delete it completely yet. Have another look before deleting:

# FOLLOWING: https://docs.aws.amazon.com/cli/v1/userguide/install-linux.html
#printf "\n\n#### ####  Install newer AWS CLI\n"
#printf "\n\n#### ####  First remove old AWS CLI\n"
#
## * All these require root/sudo.
#printf "\n#### ####  (sudo) rm -rf /usr/local/aws\n"
#rm -rf /usr/local/aws
#printf "\n#### ####  (sudo) rm /usr/local/bin/aws\n"
#rm /usr/local/bin/aws
#printf "\n#### ####  (sudo) rm ~/.aws/\n"
#rm ~/.aws/
################################################################

# From Docker troubleshooting related to the above and ultimately unrelated
# to iptables. (But Docker is interesting in how it does use iptables!)
# Look at iptables right after the Docker startup.
# * Requires root/sudo.
#printf "\n#### ####  iptables -nvL  -----  POST DOCKER STARTUP\n"
#iptables -nvL

