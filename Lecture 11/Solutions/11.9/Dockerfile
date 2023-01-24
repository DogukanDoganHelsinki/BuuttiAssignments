FROM alpine:3.16
RUN apk add --update nodejs npm

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./index.js ./index.js

EXPOSE 3000
CMD ["npm", "start"]