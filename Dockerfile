# Use Node.js for development
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the project files
COPY . .

# Expose NestJS port
EXPOSE 3000

# Start app in development mode
CMD ["npm", "run", "start:dev"]