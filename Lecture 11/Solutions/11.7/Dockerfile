# FROM node:latest
#FROM node:slim
# FROM node:alpine

FROM alpine
RUN apk add --update nodejs npm

COPY ./index.js ./index.js

CMD ["node", "index.js"]
