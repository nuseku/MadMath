# MadMath

Personal Project of Miktad Cakmak and Nuray Kutlu (Summer 2023)

Visit us at "https://tutor-site-beta.vercel.app" to see current state!
Click "Join Now" to create new account or type /home at the end of the URL.

Website made for Nuray Kutlu's math students.
Webste is currently being updated! 
* Implementing a functional backend database using postgreSQL.
* Working on using user credentials stored in database table to validate login.
* Adding functionality to schedule classes.
* Future goal of allowing the website to be accessed by the internet.
* Stay Tuned!

To run this website locally: clone the repository, cd into directory, enter 'npm run start' in terminal!

Created repository on GitHub and used npx extension for a template (npx create-react-app my-app).
Tool for setting up server-side backend connection (npm install express pg pg-promise).
To run client side server = "node server.js".
React calendar library: npm install react-calendar.

# SQL Syntax

Create Table:
CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL
);

Insert:
INSERT INTO table_name (column1, ...)
VALUES (value1, value2, value3, ...);

Delete:
DELETE FROM table_name WHERE condition;
