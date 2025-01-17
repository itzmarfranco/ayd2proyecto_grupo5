const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

const hostDB = '18.188.212.217';
const userDB = 'reminder';
const passDB = '#Reminder1S2020';
const nameDB = 'REMINDER';
const portDB = '3306';

//importing routes
const gameRoutes = require('./routes/rutas');



//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//midleware
app.use(morgan('dev'));
app.use(
  myConnection(
    mysql,
    {
      host: `${hostDB}`,
      user: `${userDB}`,
      password: `${passDB}`,
      database: `${nameDB}`,
      port: `${portDB}`
    },
    "single"
  )
);

app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', gameRoutes);


//static files 
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () => {
  console.log('Server on port 3000');
});