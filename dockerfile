FROM nginx:latest
EXPOSE 3000
EXPOSE 27017
COPY ./docker/nginx.conf /etc/nginx/nginx.conf

FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install nodemon
RUN npm install -g nodemon

# Install dependencies
COPY ./app/package.json /usr/src/app
RUN npm install

# Bundle app source
COPY ./app /usr/src/app

# Exports
EXPOSE 3001
EXPOSE 27017
CMD [ "npm", "run", "monitor" ]
