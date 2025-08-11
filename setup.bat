@echo off
REM Study Abroad Consultancy - Windows Setup Script
REM This script sets up the entire project for immediate use

echo 🚀 Setting up Study Abroad Consultancy Angular App...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js could not be found. Please install Node.js v18 or higher.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Check if npm is installed  
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm could not be found. Please install npm.
    pause
    exit /b 1
)

echo ✅ npm detected
npm --version

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Check if Angular CLI is installed globally
ng version --version >nul 2>&1
if errorlevel 1 (
    echo 📦 Installing Angular CLI globally...
    call npm install -g @angular/cli@latest
    
    if errorlevel 1 (
        echo ⚠️  Failed to install Angular CLI globally. You can still use 'npx ng' commands.
    ) else (
        echo ✅ Angular CLI installed globally
    )
) else (
    echo ✅ Angular CLI detected
)

REM Create necessary directories
echo 📁 Creating asset directories...
mkdir src\assets\images\placeholders >nul 2>&1
mkdir src\assets\icons >nul 2>&1

echo ✅ Asset directories created

REM Setup completed
echo 🌟 Setup completed successfully!
echo.
echo 🚀 Starting development server...
echo    The application will be available at http://localhost:4200
echo    Press Ctrl+C to stop the server
echo.

call npm start
