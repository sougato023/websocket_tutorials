// to install a npm packae and to make it as part of dev dependencies
// use => npm i nodemon --save-dev
//common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
//example => npm i -D nodemon [will install nodemon as dev depedencies]
const express = require("express");
const folderMiddleware = express.static("public");

//app setup
const app = express();
const port = 4000;

//static files
app.use(folderMiddleware);

const server = app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});



