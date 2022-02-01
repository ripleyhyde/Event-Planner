//Import mongoose
const mongoose = require("mongoose");

//Create schema (structure) for Event
const EventSchema = new mongoose.Schema(
  //Key (or attribute) and data type
  {
    organizer: { type: String, maxlength: 20 },
    name: { type: String },
    email: String,
    image: { type: String, required: true },
    numOfSeats: Number,
    bookedSeats: Number,
    startDate: Date,
    endDate: Date,
  },
  //Add timestamp for every entry to database
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
