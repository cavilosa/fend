var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

// You could call it aylienapi, or anything else
var textapi = new meaningCloud({
   application_key: process.env.API_KEY
});
const data = {};

const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

const port = 8080;
const server = app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(data);
})
