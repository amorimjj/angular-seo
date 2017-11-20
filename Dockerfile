FROM node:8

RUN \
	npm -g config set user root \
    && npm install -g --unsafe-pers @angular/cli

WORKDIR /usr/src/seo

