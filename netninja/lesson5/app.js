// to install a npm packae and to make it as part of dev dependencies
// use => npm i nodemon --save-dev
//common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
//example => npm i -D nodemon [will install nodemon as dev depedencies]
// const express = require("express");
// const folderMiddleware = express.static("public");

// //app setup
// const app = express();
// const port = 4000;

// //static files
// app.use(folderMiddleware);

// const server = app.listen(port, () => {
//     console.log(`Listening to port: ${port}`);
// });

// /*
//                                     Lesson 3: Socket.io


// install = > npm i socket.io                                    
// */
// const express = require("express");
// const folderMiddleware = express.static("public");
// const socket = require("socket.io");

// //app setup
// const app = express();
// const port = 4000;

// //static files
// app.use(folderMiddleware);




// const server = app.listen(port, () => {
//     console.log(`Listening to port: ${port}`);
// });

// //socket setup
// const io = socket(server);
// //listen up for event connection
// io.on("connection", (socket) => {
//     console.log(`Made a socket connection to: ${socket.id}`);
// })


// /*
//                                     Lesson 4: Emiiting messages using socket.io


// install = > npm i socket.io                                    
// */
// const express = require("express");
// const folderMiddleware = express.static("public");
// const socket = require("socket.io");

// //app setup
// const app = express();
// const port = 4000;

// //static files
// app.use(folderMiddleware);




// const server = app.listen(port, () => {
//     console.log(`Listening to port: ${port}`);
// });

// //socket setup
// const io = socket(server);
// //listen up for event connection
// io.on("connection", (socket) => {
//     console.log(`Made a socket connection to: ${socket.id}`);

//     socket.on("chat", (data) => {
//         //send the data to all clients
//         io.sockets.emit("chat", data)
//     });
// })

/*
                                    Lesson 5: Broadcasting a message
                                    It send to all client except itself


install = > npm i socket.io                                    
*/
const express = require("express");
const folderMiddleware = express.static("public");
const socket = require("socket.io");

//app setup
const app = express();
const port = 4000;

//static files
app.use(folderMiddleware);




const server = app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});

//socket setup
const io = socket(server);
//listen up for event connection
io.on("connection", (socket) => {
    console.log(`Made a socket connection to: ${socket.id}`);

    socket.on("chat", (data) => {
        //send the data to all clients
        io.sockets.emit("chat", data)
    });

    socket.on("typing", (data) => {
        //broadcast a message
        socket.broadcast.emit("typing", data);
    });
})

