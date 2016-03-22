var db = require('../models/db');
var express = require('express');
var session = require('express-session');

exports.alert = function(req, res){
    res.render('alert',{user:req.session.user}); 
 }

exports.login = function(req, res){  
     res.render('login');
 } 

exports.logout = function(req, res){
        req.session.destroy(function(){           
         res.redirect('/login');
        });
 }

exports.regis = function(req, res){
        res.render('regpage');
   }

exports.insert = function(req, res){
      var a=req.body.username;
      var b=req.body.password; 
      var client = db.pg_connect();
      var queryConfig={
               text:'insert into login values ($1,$2)',
               values:[a,b]
             };
	 client.query(queryConfig, function(err, result) {
              if (err){  
	    	     res.json({message:"error in db query"});
                
	      }else{
         	  res.json({message:"registration success"});
	      }
	 });  
   
}
exports.send = function(req, res){
      var a=req.body.username;
      var b=req.body.password;
      var client = db.pg_connect();
      var queryConfig={
               text:'select * from login where uname=$1 AND pass=$2',
               values:[a,b]
             };
	 client.query(queryConfig, function(err, result) {
              if (result.rowCount==0){                 
	    	     res.json({message:"username and password is incorrect"});
	      }else{
                     var s= req.session;
                     s.user=a;
                     console.log(s);    
                     console.log(result);    	    
               	     res.json({message:"true"});
	      }
	 });  
   
}
