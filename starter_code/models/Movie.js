const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const movieSchema = new Schema ({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

module.exports = mongoose.model('Movies', movieSchema)