#! /usr/bin/env zsh
# ./auto/build-010-full-stack--build-all.zsh

# THIS SCRIPT MUST BE RUN FROM THE PROJECT ROOT DIRECTORY.


echo "-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -"
echo "- - - - - - - - BUILD ALL"

echo "---->  ./auto/build-010-full-stack--build-all.zsh"

# The following build is just a sanity check build for comparison and to see errors early. This step could be disabled.
# When the NGINX container is built, the real node build will occur in a temp image.
# ** Don't disable this step here. If you want it disabled, do so inside the script: build-020--react.zsh
# This step may already be disabled in build-020--react.zsh and you may only ever need to enable it if you want to
# compare your local Node build with the one which occurs in the container. This would be a great way to troubleshoot
# any issues with the NGINX Node build done by the NGINX Dockerfile. Any possible problems usually come from a
# missing file needed for the build which you may need to add to: build-030-prep-docker-build--nginx.zsh
# Other than something like that, The NGINX Node build of your app should have no problems if your local
# dev server has been building and running the app for you fine.
# The builds are reliable as long as all need resources get copied into place during the build prep step.

./auto/build-020--react.zsh

# Copy into position, resources needed to build the nginx container, including those for the node pre-build.
./auto/build-030-prep-docker-build--nginx.zsh

# Copy into position, resources needed to build the node container.
#### NOT IN USE. SEE: /node-server-deprecated/ #### ./auto/build-040-prep-docker-build--node.zsh

# Build the mongo (MongoDB) container.
./auto/build-038-docker-build-tag--mongo.zsh

# Build the apollo (Apollo GraphQL) container.
./auto/build-042-docker-build-tag--apollo.zsh

# Build the nginx container.
./auto/build-050-docker-build-tag--nginx.zsh

