# Project Overview
=====================

This is a Node.js Express application that uses MongoDB as its database. The application is designed to be scalable and efficient, using PM2 as its process manager.

## Getting Started
====================

To start the application, use the following commands:

* `pm2 start process.json --env development` for development mode
* `pm2 start process.json --env production` for production mode

## Logging
==========

The application uses PM2's built-in logging features to log important events and errors. The logs are stored in the `logs` directory.

### Log Levels

The application uses the following log levels:

* `info`: General information about the application
* `warn`: Warnings about potential issues
* `error`: Errors that occur during execution

### Log Format

The logs are stored in a JSON format, with each log entry containing the following information:

* `timestamp`: The timestamp of the log entry
* `level`: The log level of the entry
* `message`: The log message

## MongoDB
==========

The application uses MongoDB as its database. The MongoDB connection settings are stored in the `.env` file.

### MongoDB Connection String

The MongoDB connection string is in the format `mongodb+srv://username:password@cluster-name.mongodb.net/database-name`

### Database Name

The name of the database used by the application

## Environment Variables
=========================

The application uses environment variables to store sensitive information such as database credentials and API keys. The environment variables are stored in the `.env` file.

### Required Environment Variables

* `MONGODB_URI`: The MongoDB connection string
* `MONGODB_DB`: The name of the database used by the application
* `NODE_ENV`: The environment mode (development or production)

### Optional Environment Variables

* `LOG_LEVEL`: The log level of the application (info, warn, error)

## .env File
=============

The `.env` file should contain the following environment variables:

```bash
MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/database-name
MONGODB_DB=database-name
NODE_ENV=development
LOG_LEVEL=info
```
