/*
var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'mydb'
});
connection.connect();

app.get('', (req, res) => {

    connection.query('SELECT * FROM Customer', (err, results) => {
        if (err) {
            console.log(err);
        }
        res.send(results);
        console.log(results);
    });
    app.listen(8080);
});
*/

/*var express = require('express');
var app = express();


app.get('/',function (req,res){
    res.send('Get Request')
});
//define the route
var server = app.listen(5000, function (){
   console.log("Server is running")
});*/

/*var http = require('http');

http.get('', function (req, res) {

    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mysql",
        database: "mydb"
    });

    // connect to your database
    con.connect(function (err) {

        if (err) console.log(err);

        // query to the database and get the records
        con.query('select * from Customer', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
}).listen(5050);*/

var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "mydb"
});

app.get('/customers', function (req, res) {
    con.connect(function (err) {
        if (err) console.log(err);
        // query to the database and get the records
        con.query('select * from Customer', function (err, result) {
            if (err) console.log(err)
            // send records as a response
            res.send(result);
        });
    });
});

/*app.post('/', function (req, res) {
    // query to the database and get the records
    con.query('INSERT INTO Customer VALUES (?,?,?)',[req.body.id, req.body.name, req.body.address], function (err, result) {
        if (err) console.log(err)
        // send records as a response
        res.status(201).send(result);
    });
    con.connect(function (err) {
        if (err) console.log(err);
    });
});*/

app.listen(5000, function () {
    console.log('Server is running..');
});





