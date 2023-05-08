# Use the official Node.js 16 image as the base image
FROM node:12.13.0

# Set the working directory
WORKDIR /app

# Install Python 2.7
RUN apt-get update && \
    apt-get install -y python2.7

# Set Python 2.7 as the default python
RUN update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the required npm packages
RUN npm install

# Copy the rest of your project into the container
COPY . .

# Build the Gatsby project
RUN npm run build

# Install the global Gatsby CLI
RUN npm install -g gatsby-cli

# Expose the default Gatsby port
EXPOSE 8000

# Set the command to run your Gatsby application
CMD ["gatsby", "serve", "-H", "0.0.0.0"]

