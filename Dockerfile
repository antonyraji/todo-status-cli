# Use the official Node.js image as base
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory in the container
COPY . .

# Command to run the application
CMD ["npm", "start"]
