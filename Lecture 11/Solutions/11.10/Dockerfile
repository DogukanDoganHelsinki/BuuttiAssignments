FROM alpine:3.16
RUN apk add --update nodejs npm

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src

ARG PORT
ARG SECRET_USER
ARG SECRET_HASH

ENV PORT $PORT
ENV SECRET_USER $SECRET_USER
ENV SECRET_HASH $SECRET_HASH

EXPOSE 3000
CMD ["npm", "start"]