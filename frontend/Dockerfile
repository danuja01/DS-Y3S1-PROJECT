# Use a Node.js base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the app files
COPY . .

# Expose the desired port
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "dev" ]
