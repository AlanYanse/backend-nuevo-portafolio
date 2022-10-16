
const express = require("express");
const app = express();
let cors = require("cors");
const bodyParser = require("body-parser");
//------ Para importar las variables de entorno ----//
require('dotenv').config({path: "./.env"});
const puerto = process.env.PORT;
//--------------------------------------------------//
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(require("./routes/correoRoutes"));

app.listen(puerto, ()=>{
    console.log(`Server on port ${puerto}`);
});