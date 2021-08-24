
// server side 
// Setup empty JS object to act as endpoint for all routes

/* Empty JS object to act as endpoint for all routes */

// Require Express to run server and routes
projectData = {};

const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

// http://localhost:3000/
const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };



// GET route
app.get('/all', sendData);

function sendData (req, res) {
  res.send(projectData);
}

// POST route // POST  Data
// const data = [];
app.post('/add', addData);


function addData (req,res){
    projectData['date'] = req.body.date,
    projectData['temp']  = req.body.temp,
    projectData['content'] = req.body.content
    res.send(projectData)

             console.log(projectData);        
};


