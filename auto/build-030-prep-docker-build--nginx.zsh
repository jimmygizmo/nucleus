#! /usr/bin/env zsh

# TODO: The wording in this file was adapted quickly from past versions for different kinds of React apps.
#   A good rewrite is needed.

# After a Node build of your React app, the current script will copy the  build output
# into the NGINX web content directory at /nginx/www/.
# We copy the entire contents of .next, not the .next folder itself.

# There may also be other files, directories and content, maintained in the repository which
# also needs to be copied into /nginx/www/ prior to building the docker container image.
# Such content is maintained in the /xwww/ directory at the project root.
# The standard is that React build output will be copied first and /xwww/ content will be copied last.
# This will allow the greatest level of control since /xwww/ is more manually maintained and
# React build output is automatically generated. In any case we must have a known standard as to
# which source will overwrite the other source IF there happen to be any conflicts, be they either
# intentional or unintentional.


# THIS SCRIPT MUST BE RUN FROM THE PROJECT ROOT DIRECTORY.

echo
echo "################################"
date
echo "################################"
echo

printf "\n############################################################\n"
printf "\nCOPYING BUILD OUTPUT INTO /NGINX/NODESRC/ FOR DOCKER BUILD\n"


# TODO: We could delete some standard about files we don't need to ship with the built image.
#rm nginx/www/about-nginx-www.txt  and a few others.


printf "\n############################################################\n"
printf "\nCOPYING REACT APP COMPONENTS INTO /NODE/ FOR DOCKER BUILD\n"

# Directory trees
cp -Rpv nucleus/src nginx/nodesrc/
cp -Rpv nucleus/public nginx/nodesrc/

# Individual files
#### cp -pv nucleus/tailwind.config.js nginx/nodesrc/  # LATER
cp -pv nucleus/package.json nginx/nodesrc/
cp -pv nucleus/package-lock.json nginx/nodesrc/

# Might be needed later?
####cp -pv nucleus/.eslintrc.json nginx/nodesrc/
# We don't currently have a tsconfig.json in this project.
# NOTE: The presence of it will trigger Typescript linting.
####cp -pv nucleus/tsconfig.json nginx/nodesrc/
####cp -pv nucleus/postcss.config.js nginx/nodesrc/  # Next.js only?
####cp -pv nucleus/.env.local nginx/nodesrc/  # Next.js only?


printf "\n############################################################\n"
printf "\nCOPYING XWWW CONTENT INTO /NGINX/WWW/ FOR DOCKER BUILD\n"
cp -Rpv xwww/* nginx/www/

printf "\n############################################################\n"
printf "\nCOPYING SSL/TLS CERT & KEY INTO /NGINX/CERTS/ FOR DOCKER BUILD\n"
cp -pv secrets/nucleus_app.crt nginx/certs/
cp -pv secrets/nucleus_app.key nginx/certs/
cp -pv secrets/nucleus_dhparam.pem nginx/certs/

