var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var db = require('./models/db');
var app = express();
var session = require('express-session');
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
//app.use(session({ secret: 'keyboard cat',resave: false, saveUninitialized: false,cookie: {maxAge:60000}}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});

// development only
if ('development'== app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/login', user.login);
app.post('/send', user.send);
app.get('/regis', user.regis);
app.get('/regmsg', function(req,res){
res.render('alert');
});

http.createServer(app).listen(app.get('port'), function(){
  db.pg_migrate();
  console.log('Express server listening on port ' + app.get('port'));
});
