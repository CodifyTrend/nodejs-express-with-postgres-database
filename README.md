# nodejs-express app-with-postgres-database.
This app contains login form with postgres database connectivity.
#requirements
#
1. install nodejs v5.8.0 and npm version 3.7.3
2. install postgres databse v9.4.6
3. create the database and replace your db name in /webserver/models/db.js file at connection string otherwise it will crash.

#run the app 
To run the app type the command from webserver directory as:
#
npm start
#
or you can run the app.js file as:
#
node app.js
#
It will listen on port 3000 at localhost.
#
you can access home page of the app from browser at http://localhost:3000/
#
you can access login page of the app from browser at http://localhost:3000/login
#    
It will create login table inside your database at startup.
There is a submit button in login page,
upon click that button the username and password entries are stored to login table of database.

#learnings:
#
1. ajax call to get and post methods.
2. jquery to fetch the values of username and password.
3. javascript is used to handle onclick events in /views/login.jade
4. postgres database connection to insert the username and password to database.
