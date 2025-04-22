#!/bin/bash

# Install PHP dependencies
curl -sS https://getcomposer.org/installer | php
php composer.phar install --no-dev

# Install Node.js dependencies
npm install

# Build assets
npm run build

# Create necessary directories
mkdir -p /tmp
mkdir -p /tmp/ssr

# Set permissions
chmod -R 777 /tmp
chmod -R 777 /tmp/ssr 