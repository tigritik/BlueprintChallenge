# Use minimal Node.js base image on Alpine Linux
FROM node:lts-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the full app into the container
COPY . .

# Define environment variables for Cloud Run
ENV PORT=8080

# Build your Vite app for production
RUN npm run build

# Install a lightweight static server globally
RUN npm install -g serve

# Document the exposed port
EXPOSE 8080

# Command to serve the app using SPA mode
CMD ["serve", "-s", "dist"]
