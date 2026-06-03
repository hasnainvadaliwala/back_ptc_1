require('dotenv').config();         // This dumps .env into process.env
const express = require('express')//import express module from "express" this also works in commonjs
const app = express()

// const port = process.env.PORT || 3000....this can be the alernative works like a backup
//we can also use direcly process.env.PORT in app.listen() method instead of creating a variable port
//doesnt matter what the port value is,that port number that is going to be used is in the .env file because of process.env.PORT
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('<h1>Hello hasnain!You can do it</h1>')
})

app.get("/twitter", (req, res) => {
    res.send("welcome to twitter")
})

app.get("/instagram",(req,res) => {
    res.send("Welcome to instagram!!")
})

app.get("/youtube",(req,res) => {
    res.send("YOUTUBE IS FAR BETTER THAN INSTAGRAM!!!")
})

app.get("/Libas",(req,res) => {
    res.send("<h1><i>Libas is one of the best and old Kidswear shop in the Town!!</i></h1>")
})

app.get("/login",(req,res) => {
    res.send('<b>plz login to Mr.Hasnain\'s websites</b>')
})

app.get("/chai",(req,res) => {
   res.send("<h3>Your chai is ready! Take a shot and get recharged!!</h3>") 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


                                                        //IMPORTANT NOTES:
// ✅ app.get() - Handle GET requests
// ✅ (req, res) - Request/Response objects
// ✅ res.send() - Send responses
// ✅ app.listen() - Start server
// ✅ Port configuration - Where server listens
// ✅ Nodemon - Auto-restart on changes
// ✅ The workflow - Edit → Save → Test
// ✅ Node.js fundamentals - Code loads once, restart to reload

// # After making changes in peoject and let it visible in git also so , In your terminal:

// git add .
// git commit -m "Added new lines"
// git push

// # NOW check GitHub
// // # Your changes will be visible! ✅


                                                    // Express does this automatically:
// User visits /chai
//     ↓
// Express creates:
//   - req object (contains user's request data)
//   - res object (ready to send response)
//     ↓
// Your arrow function receives them as parameters
//     ↓
// You use them in your code


//                                                                       The Complete Process:
// 1. Run ONCE: npm run dev
//    └─ Server starts and keeps running

// 2. Make changes: Edit code in VS Code
//    └─ Edit whatever you want

// 3. Save: Ctrl + S
//    └─ Nodemon auto-restarts (you don't do anything!)

// 4. Test: Go to browser
//    └─ Visit http://localhost:4000/route
//    └─ See your changes! ✅


//OR run in terminal: npm run start (without nodemon, you have to restart manually after changes)


                                                          // The Relationship:
// javascript┌─────────────────────────────────────────┐
// │  app.get() = BLUEPRINT (what to do)     │
// │  app.listen() = ACTIVATION (turn on)    │
// └─────────────────────────────────────────┘

// app.get()      ← Defines routes (no server yet)
// app.listen()   ← Starts server on PORT (makes routes accessible)

// BOTH are needed for it to work!





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