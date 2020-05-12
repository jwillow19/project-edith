FROM node:13-alpine3.11

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY server.js .
EXPOSE 5000

CMD ["npm", "start"]




