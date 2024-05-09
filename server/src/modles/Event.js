const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    id: Number,
    image: String,
    title: String,
    startDate: String,
    startMonth: String,
    endDate: String,
    endMonth: String,
    location: String,
    moreInfo: String,
    registrationStatus: String,
    startTime: Date
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
