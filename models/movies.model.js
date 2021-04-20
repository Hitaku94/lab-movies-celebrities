const { Schema, model } = require("mongoose");

require('../models/celebrities.model')

const MovieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{
        type: Schema.Types.ObjectId,
        ref: "CelebModel"
    }],
})

const MovieModel = model("MovieModel", MovieSchema);

module.exports = MovieModel;