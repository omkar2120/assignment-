const express  = require('express');
const app = express();
require("./conn/connection")
app.use(express.json());
const router = require("./route/routes.js");

app.use(router)


app.listen(3000,() => {
    console.log("Server is running on port 3000")
})