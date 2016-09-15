module.exports={
                 pg_migrate: function pg_migrate(){
                       var client=this.pg_connect();
                    client.query("CREATE TABLE IF NOT EXISTS login (uname char(20), pass char(20))"); 
      client.query("CREATE TABLE IF NOT EXISTS item(id SERIAL PRIMARY KEY, iname VARCHAR(60))");	  
client.query("CREATE TABLE IF NOT EXISTS vendor(id SERIAL PRIMARY KEY, vname VARCHAR(60))");	   
client.query(" CREATE TABLE IF NOT EXISTS record(id SERIAL PRIMARY KEY, item VARCHAR(60), vendor VARCHAR(60),store VARCHAR(60))");	          
            },

                pg_connect: function pg_connect() {

                  var pg = require('pg');
                  var connectionString = "postgres://postgres@localhost:5432/employee";               
	          var client = new pg.Client(connectionString);
	          client.on('drain', client.end.bind(client)); //disconnect client when all queries are finished
	          client.connect();
	          return client;
   },
          
}
	
