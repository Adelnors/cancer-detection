FROM node:20

# Create app directory
WORKDIR /app

ENV PORT=3000
ENV HOST=0.0.0.0
ENV MODEL_URL=https://storage.googleapis.com/submissionmlgc-nathanael-bucket/model.json

# Copy package.json and package-lock.json for dependency management
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port
EXPOSE 3000

# Start the server using the configured script
CMD [ "npm", "run", "start" ]