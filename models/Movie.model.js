const mongoose          = require("mongoose")
const Schema            = mongoose.Schema


//SCHEMA

const movieSchema        = new Schema({
    title: String,
    director: String,
    starts: [String],
    image: String,
    description: String,
    showtimes: [String]
},

{
    timestamps: true,
})
    


//MODELO

const Movie = mongoose.model("Movie", movieSchema)

//EXPORTACIÓN

module.exports = Movie