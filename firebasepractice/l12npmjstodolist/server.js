import express from "express"
// =>Express Server Setup
// third party module from npm
const exapp = express(); //

// server static file from the src
exapp.use(express.static('dist')); 

// start the express server by define port
exapp.listen(8001,()=>{
     console.log("Server is running on http://localhost:8001")
});