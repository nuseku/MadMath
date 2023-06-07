# MadMath

Website made for Nuray Kutlu's math students.
Webste is currently being updated! 
...switching database from postgreSQL to mongoDB
...improving UX for login
...adding functionality to schedule classes
Stay Tuned!

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
