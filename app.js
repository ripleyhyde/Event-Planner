//Import connectDB to tie VS code to mongoDB
const connectDB = require("./db/database");

//Import routes file
const routes = require("./routes");

//Create instance for express
const express = require("express");

//Create instance for app
const app = express();

//App will now accept json objects (middleware)
app.use(express.json());

//To allow app.js to use router
app.use("/events", routes);

//Database connection must be one line above app.listen()
connectDB();
//Host in browser (localhost:8000)
//Must always be at the bottom of app
app.listen(8080, () => {
  console.log("working");
});
