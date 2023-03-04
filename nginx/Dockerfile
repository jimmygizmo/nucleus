# The Nucleus Stack - NGINX Dockerfile

# NGINX BUILD STAGE 1: TEMPORARY NODE IMAGE BUILDS REACT SITE

# Base on offical Node.js Alpine image
FROM node:19.3.0-alpine3.16 as NODE_BUILD
# TODO: By March, 2023, plan to upgrade to: 19.3.0-alpine3.17.*
#   3.17 is available right now but too new to use IMHO. (One month old over the holidays = high risk.)
#   Major change to a critical area (OpenSSL 3.0) is also high risk since developers are unavailable right now.
# TODO: See if there is a non-Alpine option, also of small size.

# TODO: A better node image might be: FROM node:19.4.0-slim
# BUT EVEN THIS IMAGE NEEDS AN NPM UPGRADE:
RUN npm install -g npm@9.4.0
# TODO: Try to do this build here using FROM node:19.4.0-slim
# EVEN BETTER .. LOOK FOR AN EVEN NEWER SLIM IMAGE THAT MIGHT HAVE THE NEW NPM IN IT!!

# Set working directory
WORKDIR /usr/app


# TODO: Reassess the order of steps and any steps which invalidate cached layers

COPY ./nodesrc/package*.json ./

# Install dependencies
RUN npm install --production


# This step invalidates cache and so should come later. TODO: Clean up this Dockerfile and such comments.
# Copy all files
COPY ./nodesrc ./


# Build app
RUN npm run build


# NGINX BUILD STAGE 2: COPY BUILD OUTPUT FROM STAGE 1 AND BUILD NGINX IMAGE
# Latest version as of Dec 22. 2022:  -- TODO: See if there is a non-Alpine option, also of small size.
FROM nginx:1.23.1-alpine


# wait-for-it.sh needs bash installed. timeout is already present. TODO: This looks like an old comment.
RUN apk update
RUN apk upgrade
# bash is for wait-for-it.sh
RUN apk add bash
# netstat is for troubleshooting wait-for-it.sh operation
RUN apk add net-tools


# FOR THIS STEP: REFERRING TO THE TEMPORARY NODE IMAGE ABOVE
# NOTES FROM INSIDE THE CONTAINER: EVERYTHING FROM ./nodesrc/ IS NOW UNDER /usr/app/
# SITE BUILT IN THE CONTAINER TO: /usr/app/build/
COPY --from=NODE_BUILD /usr/app/build /usr/share/nginx/html/


COPY ./nginx-nucleus.conf /etc/nginx/nginx.conf
# Note other (default) NGINX settings in the conf dir:
# /etc/nginx/conf.d/default.conf

# To try the feature to parse ENV vars into this template.
# To do this we need to find the utility and run it before NGINX comes up. The article never covered that.
#COPY ./nginx-nucleus.conf.template /etc/nginx/template/


# Copy SSL/TLS certificates and dhparam files. The /ssl/ dir is created below as a side effect.
COPY /certs/stackdemo_xyz.crt /etc/nginx/ssl/
COPY /certs/stackdemo_xyz.key /etc/nginx/ssl/
COPY /certs/nucleus_dhparam.pem /etc/nginx/ssl/


# Copy web content
# Contents of site build output (.next/? out/?) should be copied into /www/ prior to Docker build.
COPY /www/ /usr/share/nginx/html/


# For docker-compose execution, 'mongodb' must be up and acceptiing connections before 'apollo' starts.
# The wait-for-it.sh script will be run by docker-compose and will be passed
# arguments such that once it detects the mongodb port is accepting connections, it will then
# bring up apollo.
COPY ./wait-for-it.sh /usr/share/nginx/wait-for-it.sh
RUN chmod o+x /usr/share/nginx/wait-for-it.sh


# Disable the entrypoint of the nginx base image. We want to use wait-for-it.sh to start nginx.
# This is not strictly necessary, because the app can handle waiting on the backed within its code, but it
# is a good experiment to do. The original entrypoint taken from docker inspect is this:
# /docker-entrypoint.sh nginx -g daemon off;  <- don't forget that semicolon!!

ENTRYPOINT []

