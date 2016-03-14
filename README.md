# nodejs-express app-with-postgres-database.
This app contains login form with postgres database connectivity.
#requirements
#
1. install nodejs
2. install postgres databse.
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
you can access login page of the app from browser at http://localhost:3000/login
#        
There is a submit button in login page,
upon click that button the username and password entries are stored to postgres database table.

#learnings:
#
1. ajax call to get and post methods.
2. jquery to fetch the values of username and password.
3. javascript is used.
4. postgres database connectivity.
