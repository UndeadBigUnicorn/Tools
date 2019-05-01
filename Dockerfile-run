# Install the app dependencies in a full Node docker image
FROM node:10
  
WORKDIR "/"

# Install OS updates 
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Copy the dependencies into a Slim Node docker image
FROM node:10-slim
  
WORKDIR "/"

# Install OS updates 
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Install app dependencies
COPY --from=0 /node_modules /node_modules
COPY . /

ENV NODE_ENV production
ENV PORT 3000

USER node

EXPOSE 3000
CMD ["npm", "start"]
