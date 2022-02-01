const express = require("express");
const { Mongoose } = require("mongoose");
const Event = require("./model/Event");
const router = express.Router();

//Method to create new product
router.post("/", async (req, res) => {
  try {
    //Add new object to database using mongoose.create() method
    const newEvent = await Event.create(req.body);
    console.log(newEvent);
    //Change response code
    res.status(201);
    //Message after request completion
    res.json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Method to get all events from database by using mongoose.get()
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Method to delete event
//Add :id to URL as a changing variable
router.delete("/:id", async (req, res) => {
  //Set :id (the changing variable) as a param
  try {
    const { id } = req.params;
    //Create variable to store value of found event
    const foundEvent = await Event.findByIdAndDelete({ _id: id });
    //If an event is found...
    if (foundEvent) {
      //Assign http status code 204 (meaning success, no response)
      //and use .end() to signal no more data will be written
      res.status(204).end();
      //...otherwise
    } else {
      //Return status 404 with a message saying "event not found"
      res.status(404).json({ message: "event not found" });
      //If try block does not work catch an error 500 and return error message
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
