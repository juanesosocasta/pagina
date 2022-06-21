const express = require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();
const {API_VERSION}=require("./config");

const userRoutes=require("./src/routes/user");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//evita el bloqueo del cors
app.use(cors());

app.use(`/api/${API_VERSION}`, userRoutes);
/*configuracion de los header http */
module.exports=app;