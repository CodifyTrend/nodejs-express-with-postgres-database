module.exports={

                  pg_connect : function pg_connect(){
 	          var pg = require('pg');
	          var connectionString = "postgres://postgres@localhost:5432/employee";
	          var client = new pg.Client(connectionString);
	          client.on('drain', client.end.bind(client)); //disconnect client when all queries are finished
	          client.connect();
	          return client;
         }//end of function

}
	
