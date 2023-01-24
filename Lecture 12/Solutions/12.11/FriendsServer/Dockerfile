FROM alpine:3.16
RUN apk add --update nodejs npm

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public

ARG PORT
ENV PORT $PORT

EXPOSE $PORT
CMD ["npm", "start"]