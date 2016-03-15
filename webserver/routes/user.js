var db = require('../models/db');
  exports.login = function(req, res){
	res.render('login');
     }
exports.send = function(req, res){
      var a=req.body.username;
      var b=req.body.password;
     var client = db.pg_connect();
      var queryConfig={
               text:'insert into login values ($1,$2)',
               values:[a,b]
             };
	 client.query(queryConfig, function(err, result) {
	      if (err){
	    	  console.log("errr is", err);
	    	  res.json({message:"err in db query"})
	      }else{
	    	  console.log("result is ", result);      
               	  res.json({message:"data saved sucessfullfy"})
	      }
	 });  
   
}
