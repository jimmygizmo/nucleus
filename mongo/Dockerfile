# MongoDB - Nucleus Stack
# Dockerfile reference: https://docs.docker.com/engine/reference/builder/

# SEEKING SMALLER: I tried Bitnami and it only saved 100MB. Bitnami sound like great, secure (non-root) images!!
#FROM bitnami/mongodb:6.0.4
# INFO: https://hub.docker.com/r/bitnami/mongodb
# VOLUMES:
# /path/to/mongodb-persistence:/bitnami/mongodb
# TODO: Since this is non-root, will have to clean/change some of the below to use Bitnami. Do it later.

FROM mongo:6.0.3
# Shell: /bin/sh

# Set working directory
WORKDIR /usr/app

# /datavolume for general sharing
RUN mkdir /usr/app/datavolume


# -------- SHOW IMAGE INFORMATION --------
# MongoDB data storage directory: /data/db
# /data/db will be mapped to /data/dbvolume on EC2 for production and /datavolume locally inside the project for dev.
RUN uname -a
RUN which sh; which bash; which env
RUN date > /data/db/mongodb-data-db-dir-test.txt
RUN ls -alt /data/db
RUN echo $PATH


# -------- BUILD INFO, BUILD ID FILE --------
# This step contains a changing build id and always invalidates cache, so do it last:
COPY ./buildinfo-mongo.txt /usr/app

RUN date > /usr/app/docker-build-time.txt
RUN cat /usr/app/docker-build-time.txt
RUN cat /usr/app/buildinfo-mongo.txt

