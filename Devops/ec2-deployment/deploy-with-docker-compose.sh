#!/bin/bash

# Exit on error
set -e

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check for Docker
if command_exists docker; then
    echo "Docker is installed."
else
    echo "Docker is not installed. Installing Docker..."
    sudo apt-get update
    sudo apt-get install -y docker.io
    sudo systemctl start docker
    sudo systemctl enable docker
fi

# Check for docker-compose
if command_exists docker-compose; then
    echo "docker-compose is installed."
else
    echo "docker-compose is not installed. Installing docker-compose..."
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

# Path to docker-compose.yaml
COMPOSE_FILE="../../docker-compose.yaml"

# Run docker-compose
if [ -f "$COMPOSE_FILE" ]; then
    echo "Running docker-compose up with $COMPOSE_FILE..."
    docker-compose -f "$COMPOSE_FILE" up -d
    echo "Deployment started. Check containers with 'docker ps'."
else
    echo "$COMPOSE_FILE not found."
    exit 1
fi
