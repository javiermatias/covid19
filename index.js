// Carga Libreria Express
let express = require('express')

const path = require('path');

// Import Body parser
let bodyParser = require('body-parser');

var cors = require('cors');

// Initialize the app
let app = express();

// use it before all route definitions
app.use(cors());


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());

 //console.log(process.env.PORT);
 
// Setup server port
var port = process.env.PORT || 8080;



app.use('/', express.static(__dirname + '/')); 

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Se levanto la app en el puerto" + port);
});

