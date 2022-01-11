# EXERCISE TRACKER
## Description
This is an application built for health nuts who come in all shapes and sizes. It allows users to create, edit, track, and delete exercises and the logs associated with them.

## Overview of the Tech Stack
The MERN stack, which is a popular stack of technologies for building a modern single-page application, was used to build this powerful application.

The MERN stack consists of the following technologies:
  - MongoDB: A document-based open source database
  - Express: A web application framework for Node.js
  - React: A JavaScript front-end library for building user interfaces
  - Node.js: JavaScript run-time environment that executes JavaScript code outside of a browser (such as a server)
  
Although the MongoDB database can be hosted locally, I took the liberty of using MongoDB Atlas as it is a multi-cloud data platform that simplifies deployment and management of databases. Please do not judge me because of my bizzare choices. After all, coding is convoluted enough as it is.

## Functionality of the application
The application allows new users to create a basic account and existing users to login with their credentials. The dashboard is intuitive and straightforward as it lists all existing exercises and their respective logs. The 'Create Exercise Log' tab prompts the user to enter an exercise of their choice along with its duration. Immediately after an exercise log is created, the user is directed to the 'Exercises' tab wherein all available exercises can be modified or deleted. Finally, as the name would suggest, the 'Create User' tab helps the user create an account.

Although the structure may initially seem like a tapestry, in the end, it all works out.

## Design
Although the design is not ostentatious, it is simple and pretty in its own right. The ribbon at the top of the dashboard contains links to all tabs. The navigation feature, which is snappy and quick, is achieved with the help of React Router. Each tab contains text boxes, drop-down lists, and buttons to faciliate the standrd CRUD operations. 

##Tech Stack
- MongoDB
- Express
- React
- Node.js
- Packages, frameworks, and libraries such as React Router, Axios, Bootstrap, Nodemon, and MUI
