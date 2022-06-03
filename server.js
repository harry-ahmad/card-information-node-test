var express = require('express'),flash = require('express-flash'),session = require('express-session')
var bodyparser = require('body-parser');
const cookieParser = require("cookie-parser");
var Routes = require('./routes/routes.js');
require('./config')();

var app = express();
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret:"session",
    cookie: { secure: false, maxAge: 14400000 },
  })
);
app.use(flash());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}) );

app.use('/uploads', express.static('uploads'))
app.set("view engine", "ejs");
app.use(cookieParser());
console.log(__dirname)

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use('/', Routes);
app.get('/',function(req,res){
  res.sendFile(__dirname + "/views/index.html");
  });
var server = app.listen(3010, function () {
  var host = server.address().address
  var port = server.address().port
  console.log( "listen to http://localhost:" + port)
})