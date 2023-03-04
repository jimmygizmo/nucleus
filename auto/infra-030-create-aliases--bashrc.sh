#! /usr/bin/env bash

# Don't run this script (although you can).
# The aliases it creates will disappear after logout and need to be re-created upon login.
# These alias commands need to live in a .bashrc or .bash_aliases file, for
# ec2-user and if preferred, also for the root user.

# The default .bashrc on the ec2 VM has an active .bashrc file for the ec2-user and it
# has a place for aliases. Copy and paste this commands into the .bashrc file where
# indicated.

alias a="clear; pwd; ls -alt"
alias aa="clear; pwd; ls -al"
alias aaa="clear; pwd; ls"
alias ddu="docker-compose up"
alias ddn="docker-compose down"

