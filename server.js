var express = require("express");
var cookie = require("cookie-parser");
var body = require("body-parser");
var multer = require("multer");
var fs = require("fs");

var app = express();

app.listen(8081, function () {
    console.log("Server Running at http://localhost:8081/");
});

app.get("/", function (req, res) {

    fs.readFile("index.html", function (err, data) {

        res.send(data.toString());

    });


});

app.get("/about", function (req, res) {
    res.send("Welcome");

});