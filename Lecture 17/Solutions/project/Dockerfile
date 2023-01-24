FROM alpine:3.17
RUN apk add --update nodejs npm

WORKDIR /app
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend/src ./src
COPY ../frontend/dist ./dist

EXPOSE 3000
CMD ["npm", "start"]