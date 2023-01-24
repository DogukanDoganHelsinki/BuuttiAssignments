# This defines the base image used for the build.
FROM alpine:3.16

# This installs Node.js and NPM to the Alpine image
RUN apk add --update nodejs npm

# This defines the working directory
WORKDIR /app

# This copies package.json and package-lock.json files to the image
# and installs the dependencies defined in those files
COPY package*.json ./
RUN npm install

# This copies the src folder to the image
COPY ./src ./src

# This opens the port 3000 for external use
EXPOSE 3000

# This starts the app inside the container
CMD ["npm", "start"]
