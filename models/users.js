const db = require("../db")

// Create a model fromn the schema
const User = db.model("User", {
    username: { type: String, required: true },
    password: { type: String, required: true },
    status: String
})

module.exports = Song