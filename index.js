require('dotenv').config();
const express = require('express')//import express module from "express" this also works in commonjs
const app = express()

// const port = process.env.PORT || 3000....this can be the alernative works like a backup
//we can also use direcly process.env.PORT in app.listen() method instead of creating a variable port
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello hasnain!You can do it')
})

app.get("/twitter", (req, res) => {
    res.send("welcome to twitter")
})

app.get("/login",(req,res) => {
    console.log("TEST ROUTE HIT");
    res.send('<b>plz login to Mr.Hasnain\'s websites</b>')
})

app.get("/chai",(req,res) => {
   res.send("your chai is ready!Take a shot and get recharged") 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})












// process.env.PORT → checks if a port is defined in your .env file (or system environment variables)
// || 3000 → fallback to 3000 if process.env.PORT is undefined


//app.get() method used to define a route handler for GET requests to the root URL ('/').
// This function is called a callback because Express calls it when the URL is hit.

//app.listen() starts a server and listens on port 3000 for connections.

//we can  also used instead of code at 9 - 11 lines
// function started() {
//   console.log("Server started");
// }

// app.listen(3000, started);



// we can also used instead of code at 4 - 7 lines
// function r(req, res) {
//   res.send("welcome");
// }

// app.get("/", r);





// 1️⃣ Start the server on port 3000
// 2️⃣ After the server starts, print a message

//app.listen(port, callbackFunction)
//app is an object returned by the express() function, and it contains many methods.