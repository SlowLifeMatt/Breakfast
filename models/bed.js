const mongoose = require('mongoose')

// This is the Bed and Breakfast Schema
const bedSchema = new mongoose.Schema({
    location: {type: String, required: false},
    name: {type: String, required: false},
    img: {type: String, required: false},
    cost: {type: String, required: false},
    state: {type: String, required: false},
    link: {type: String, required: false},
    lat: {type: Number, required: false},
    lng: {type: Number, required: false},
    about: {type: String, required: false}
})

const Bed = mongoose.model("Bed", bedSchema)

module.exports = Bed