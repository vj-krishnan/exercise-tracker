const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a name"],
        unique: true,
        trim: true,
        minlength: 3
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;