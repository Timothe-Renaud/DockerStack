FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./front/package.json ./
COPY ./front/package-lock.json ./
RUN npm install -y --silent
RUN npm install react-scripts@3.4.1 -y -g --silent

# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["npm", "start"]