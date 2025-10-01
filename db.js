const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sdev255:password255@SongDB.sr7ygjz.mongodb.net/?retryWrites=true&w=majority&appName=SongDB", { useNewURLParser: true })

module.exports = mongoose