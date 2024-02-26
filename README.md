# MERN Stack Template


<span align="center">

![GitHub release](https://img.shields.io/github/v/release/Vishal-Katta/MERN-stack-template)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Vishal-Katta_MERN-stack-template&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Vishal-Katta_MERN-stack-template)
[![Build Status](https://github.com/Vishal-Katta/MERN-stack-template/actions/workflows/build.yml/badge.svg)](https://github.com/Vishal-Katta/MERN-stack-template/actions/workflows/build.yml)
[![GitHub license](https://img.shields.io/github/license/Vishal-Katta/MERN-stack-template)](https://github.com/Vishal-Katta/MERN-stack-template)

---

[![GitHub issues](https://img.shields.io/github/issues/Vishal-Katta/MERN-stack-template)](https://github.com/Vishal-Katta/MERN-stack-template/issues)
[![GitHub forks](https://img.shields.io/github/forks/Vishal-Katta/MERN-stack-template)](https://github.com/Vishal-Katta/MERN-stack-template/network)
[![GitHub stars](https://img.shields.io/github/stars/Vishal-Katta/MERN-stack-template)](https://github.com/Vishal-Katta/MERN-stack-template/stargazers)
![GitHub contributors](https://img.shields.io/github/contributors/Vishal-Katta/MERN-stack-template)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Vishal-Katta_MERN-stack-template&metric=bugs)](https://sonarcloud.io/dashboard?id=Vishal-Katta_MERN-stack-template)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Vishal-Katta_MERN-stack-template&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=Vishal-Katta_MERN-stack-template)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Vishal-Katta_MERN-stack-template&metric=security_rating)](https://sonarcloud.io/dashboard?id=Vishal-Katta_MERN-stack-template)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Vishal-Katta_MERN-stack-template&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=Vishal-Katta_MERN-stack-template)
![GitHub commits since latest release ](https://img.shields.io/github/commits-since/Vishal-Katta/MERN-stack-template/latest/main)

</span>


## Introduction

mern-stack-template is a MERN Stack Template created to easily get started with developing a Full Stack Web App using the complete MERN Stack with major libraries show below.

![Project Stack](/frontend/public/ProjectStack.png)

You can checkout chrome's lighthouse report while running the build! 😏

## Getting Started

To clone the project, Run the following command in your terminal:

```bash
git clone https://github.com/Vishal-Katta/MERN-stack-template.git
cd MERN-stack-template
```

## Configuration

You will need latest version of `NodeJS` and `MongoDB` installed locally on your machine.

To configure this application for use of MongoDB, you should change the Environment variable in `.env` file with your database url.

> *Quick Note:* This project is equiped with a basic API setup using Mongoose. It is expected that you will modify this API backend as necessary to suite your project. **DO NOT** count on and use the current API's USER SCHEMA as it is only meant as a placeholder and is far from a complete model.

## Installation

To get started with this project, you'll want to install the required dependencies and The following command installs both client and server packages including root directory package.json:

```shell
npm run setup
```

## Running the server

**Starting the project**

To **run whole project** ( backend and frontend ) you can use the following command:

```shell
npm run start
```

To **start just the backend** MonogoDB server and work on the API you can run:

```shell
npm run server
```

To **start just the frontend** and work on the UI, you can run:

```shell
npm run client
```
To run backend on build file of frontend, you can run:

```shell
npm run build:preview
```

## Dependencies
A list of dependencies used in the project, along with brief explanations for each.

### Backend Dependencies

- ![Express](https://img.shields.io/badge/Express-_-000000?logo=express)  
   Express is a fast, unopinionated, minimalist web framework for Node.js, used for building web applications and APIs.
- ![Mongoose](https://img.shields.io/badge/Mongoose-_-47A248?logo=mongoose)  
   Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a higher-level abstraction for MongoDB operations.
- ![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-_-orange)  
   jsonwebtoken is an implementation of JSON Web Tokens (JWT) for authentication and authorization.
- ![Nodemon](https://img.shields.io/badge/Nodemon-_-76D04B?logo=nodemon)  
   Nodemon is a utility that monitors for changes in files and automatically restarts the server when any changes occur during development.
- ![bcrypt](https://img.shields.io/badge/bcrypt-_-blue)  
   bcrypt is a password-hashing function library used for hashing passwords before storing them securely.
- ![cors](https://img.shields.io/badge/cors-_-green)  
   CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- ![body-parser](https://img.shields.io/badge/body--parser-_-blue)  
   body-parser is a Node.js body parsing middleware, used for parsing incoming request bodies in a middleware before handling.
- ![dotenv](https://img.shields.io/badge/dotenv-_-yellow)  
   dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- ![morgan](https://img.shields.io/badge/morgan-_-blue)  
   morgan is an HTTP request logger middleware for Node.js, used for logging requests to the server.
- ![path](https://img.shields.io/badge/path-_-grey)  
   path is a Node.js module that provides utilities for working with file and directory paths.
- ![colors](https://img.shields.io/badge/colors-_-red)  
   colors is a Node.js package for adding color to terminal text output.


### Frontend Dependencies

- ![React](https://img.shields.io/badge/React-_-61DAFB?logo=react)  
  React is a JavaScript library for building user interfaces, developed and maintained by Facebook.

- ![React DOM](https://img.shields.io/badge/React%20DOM-_-61DAFB?logo=react)  
  React DOM is the package responsible for rendering React components in the DOM.

- ![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-_-CA4245?logo=react-router)  
  React Router DOM provides declarative routing for React applications, enabling navigation between different components.

- ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-_-purple?logo=redux)  
  Redux Toolkit is the official toolset for efficient Redux development, offering simplified Redux setup and improved developer experience.

- ![React Redux](https://img.shields.io/badge/React%20Redux-_-764ABC?logo=redux)  
  React Redux is the official React bindings for Redux, allowing React components to interact with the Redux store.

- ![Axios](https://img.shields.io/badge/Axios-_-blue?logo=axios)  
  Axios is a promise-based HTTP client for making HTTP requests from the browser.

- ![Material UI](https://img.shields.io/badge/Material%20UI-_-blue?logo=material-ui)  
  Material UI is a popular React UI framework that provides pre-designed React components following the Material Design guidelines.

- ![Tailwind CSS Forms](https://img.shields.io/badge/Tailwind%20CSS%20Forms-_-blue?logo=tailwind-css)  
  Tailwind CSS Forms provides styles and utilities for styling forms in Tailwind CSS.

- ![React Toastify](https://img.shields.io/badge/React%20Toastify-_-blue?logo=react)  
  React Toastify is a notification library for React applications, providing customizable toast notifications.

- ![Emotion](https://img.shields.io/badge/Emotion-_-purple?logo=emotion)  
  Emotion is a popular CSS-in-JS library for styling React components.

- ![Material UI Icons](https://img.shields.io/badge/Material%20UI%20Icons-_-orange?logo=material-ui)  
  Material UI Icons provides a collection of high-quality icons for use with Material-UI components.

- ![React Icons](https://img.shields.io/badge/React%20Icons-_-blue?logo=react)  
  React Icons provides a collection of popular icon libraries as React components for easy integration.

- ![Redux Logger](https://img.shields.io/badge/Redux%20Logger-_-764ABC?logo=redux)  
  Redux Logger is a middleware for Redux that logs actions and state changes, useful for debugging Redux applications.

- ![Redux Thunk](https://img.shields.io/badge/Redux%20Thunk-_-764ABC?logo=redux)  
  Redux Thunk is a Redux middleware that allows dispatching asynchronous actions, enabling more complex logic in Redux.

- ![Tailwind Scrollbar Hide](https://img.shields.io/badge/Tailwind%20Scrollbar%20Hide-_-blue?logo=tailwind-css)  
  Tailwind Scrollbar Hide is a utility for hiding scrollbars in Tailwind CSS, useful for customizing scrollbar appearance.
