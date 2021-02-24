const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    id: String,
    password: String,
    name: String
});

mongoose.model("User", UserSchema);

module.exports = mongoose.model("User");