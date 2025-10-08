# Use minimal Node.js base image on Alpine Linux
FROM python:3.13-slim

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first for better layer caching
COPY requirements.txt ./

# Install build tools for psycopg2
RUN apt-get update && apt-get install -y gcc libpq-dev && rm -rf /var/lib/apt/lists/*

# Install dependencies
RUN pip install -r requirements.txt

# Copy the full app into the container
COPY . .

# Define environment variables for Cloud Run
ENV PORT=8000
ENV FRONTEND_ORIGIN="http://localhost:8080"
ENV DB_HOST="db"

# Document the exposed port
EXPOSE 8000

# Command to serve the app using SPA mode
CMD uvicorn src.main:app --host 0.0.0.0 --port $PORT
