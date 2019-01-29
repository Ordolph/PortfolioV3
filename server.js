const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
const DIR = __dirname;

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


require("./controllers/routes.js")(app);

app.listen(PORT, function () {
    console.log(`Listening on ${PORT}.`)
});