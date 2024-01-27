const express = require('express');
const app = express();
const path = require('path');
const router = require("./routes/route");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded())
app.set("view engine","ejs")
app.use(router);

app.listen(3000,() => {console.log("Server running at 3030")});