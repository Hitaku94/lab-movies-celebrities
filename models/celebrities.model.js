const { Schema, model } = require("mongoose");

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
})

const CelebModel = model("CelebModel", celebSchema);

module.exports = CelebModel;