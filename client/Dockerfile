# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install project dependencies using yarn
RUN yarn install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN yarn build

# Expose the port your app will run on
EXPOSE 3000

# Set the startup command to run the app
CMD ["yarn", "start"]