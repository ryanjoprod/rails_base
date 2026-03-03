#!/bin/bash
set -e

# Install Node.js dependencies
echo "Installing Node dependencies..."
npm install

# Then exec the container's main process
exec "$@"