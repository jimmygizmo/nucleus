#! /usr/bin/env bash

# Nucleus script to prepare a new EC2 instance for use.
# PART 1 OF 2 - non-root
# Expects a t2.medium running Amazon Linux.

# AWS Documentation on running setup scripts on a new VM instance:
# https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html
# In a nutshell, the script is run as root. They call it "user data".
# At this time it looks too complex to use their "User Data" system.
# We will keep these as separate scripts which will be run manually.
# TODO: Finalize plan. Script 010 is mostly info and can be run as ec2_user
#       then script 020 will be run as root (Docker install). Other
#       root installs are possible. A final non-root 030 script is possible.


printf "\n\n\n\n#### #### #### ####  SYSTEM INFORMATION  #### #### #### ####\n\n"


printf "\n#### ####  date\n"; date; printf "\n\n"


printf "\n#### ####  which env\n"; which env; printf "\n\n"


printf "\n#### ####  which bash\n"; which bash; printf "\n\n"


printf "\n#### ####  uname -a\n"; uname -a; printf "\n\n"


printf "\n#### ####  cat /proc/version\n"; cat /proc/version; printf "\n\n"


printf "\n#### ####  ps aux\n"; ps aux; printf "\n\n"


printf "\n#### ####  vmstat\n"; vmstat; printf "\n\n"


printf "\n#### ####  iostat\n"; iostat; printf "\n\n"


printf "\n#### ####  echo PATH\n"; echo "$PATH"; printf "\n\n"


printf "\n#### ####  lsblk\n"; lsblk;  printf "\n\n"


printf "\n#### ####  df -h\n"; df -h; printf "\n\n"


printf "\n#### ####  mount\n"; mount;  printf "\n\n"


printf "\n#### ####  ulimit -n\n"; ulimit -n;  printf "\n\n"


printf "\n#### ####  env\n"; env;  printf "\n\n"


# The preceding has all been information and did not need to be run as root.
# The following steps in the next script perform installations and other steps
# which must be done as root.

