const mongoose = require('mongoose')

// This is the Bed and Breakfast Schema
const bedSchema = new mongoose.Schema({
    location: {type: String, required: true},
    name: {type: String, required: true},
    img: {type: String, required: true},
    cost: {type: String, required: true},
    state: {type: String, required: true},
    link: {type: String, require: true},
    lat: {type: Number, require: true},
    lng: {type: Number, require: true},
    about: {type: String, require: true}
})

const Bed = mongoose.model("Bed", bedSchema)

module.exports = Bed