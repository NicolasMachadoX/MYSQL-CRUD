const express = require('express');
const path = require('path');
const morgan = require('morgan')
const customerRoutes = require('./routes/customer');
const app = express();

const mysql = require('mysql');
const myConnection = require('express-myconnection')

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password : 'SHADAZ',
    port: 3306,
    database: 'crudMysql'
}, 'single'))

app.use(express.urlencoded({extended:false}));

//routes

app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname,'public')));


app.listen(3000, ()=>{
    console.log('server on port 3000');
})