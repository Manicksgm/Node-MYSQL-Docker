var con = require('./connection');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/register.html');
});

app.post('/',function(req, res){
    var First_Name = req.body.First_Name;
    var Last_Name = req.body.Last_Name;
    var Mobile_Number = req.body.Mobile_Number;
    var Email = req.body.Email;
    var City = req.body.City;
    var Height = req.body.Height;
    var Weight = req.body.Weight;
    var Gender = req.body.Gender;

   

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO registration_form(First_Name, Last_Name, Mobile_Number, Email, City, Height, Weight, Gender) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [First_Name, Last_Name, Mobile_Number, Email, City, Height, Weight, Gender],function(error, result){
            if(error) throw error;
            res.send('Thank You For Registering!!');
        });
    });

});

app.listen(3000);
