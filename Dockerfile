FROM node:12
ENV NPM_CONFIG_LEVEL info
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .