const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  startDate: { type: String, required: true },
  startMonth: { type: String, required: true },
  endDate: { type: String, required: true },
  endMonth: { type: String, required: true },
  location: { type: String, required: true },
  moreInfo: String,
  registrationStatus: { type: String, required: true },
  startTime: { type: String, required: true },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
