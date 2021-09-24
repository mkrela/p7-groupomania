const express = require("express");
const app = express();
const mysql = require('mysql')
const helmet = require("helmet");
const bodyParser = require('body-parser'); 

app.use(helmet());

// Create connexion
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'gfdhhg54f5fg5fd',
  database : "groupomania"
});

// Connect
db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log("MySQL DB Connected");
})


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});



const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post');

app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes)
  
module.exports = app;