#!/bin/bash

# Study Abroad Consultancy - Setup Script
# This script sets up the entire project for immediate use

echo "🚀 Setting up Study Abroad Consultancy Angular App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js could not be found. Please install Node.js v18 or higher."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'.' -f1 | sed 's/v//')
if [ "$NODE_VERSION" -lt "18" ]; then
    echo "❌ Node.js version is too old. Please install Node.js v18 or higher."
    echo "   Current version: $(node --version)"
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm could not be found. Please install npm."
    exit 1
fi

echo "✅ npm $(npm --version) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Check if Angular CLI is installed globally
if ! command -v ng &> /dev/null
then
    echo "📦 Installing Angular CLI globally..."
    npm install -g @angular/cli@latest
    
    if [ $? -ne 0 ]; then
        echo "⚠️  Failed to install Angular CLI globally. You can still use 'npx ng' commands."
    else
        echo "✅ Angular CLI installed globally"
    fi
else
    echo "✅ Angular CLI detected: $(ng version --version)"
fi

# Create necessary directories
echo "📁 Creating asset directories..."
mkdir -p src/assets/images/placeholders
mkdir -p src/assets/icons

echo "✅ Asset directories created"

# Start the development server
echo "🌟 Setup completed successfully!"
echo ""
echo "🚀 Starting development server..."
echo "   The application will be available at http://localhost:4200"
echo "   Press Ctrl+C to stop the server"
echo ""

npm start
