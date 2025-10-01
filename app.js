<<<<<<< HEAD
const express = require("express");
const Song = require("./models/songs");
var cors = require('cors')

const app = express();
app.use(cors())

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

const router = express.Router();

//Get list of all songs in the database
router.get("/songs", async (req, res) => {
    try {
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch (err) {
        console.log(err)
    }

})

//Grab a single song in the database
router.get("/songs/:id", async (req, res) => {
    try {
        const song = await Song.findById(req.params.id)
        res.json(song)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

router.post("/songs", async (req, res) => {
    try {
        const song = await new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
    }
    catch (err) {
        res.status(400).send(err)
    }


})

//update is to update an existing record/resource/database entry.. it just uses a put request
router.put("/songs/:id", async (req, res) => {
    //first we need to find and update the song the front end wants us to update.
    //to do this we need to request the id of the song from request
    //and the find it in the database and update it
    try {
        const song = req.body
        await Song.updateOne({ _id: req.params.id }, song)
        console.log(song)
        res.sendStatus(204)


    }
    catch (err) {
        res.status(400).send(err)
    }
})

=======
//setup.. this is similar to when we use our default tags in html
const express = require("express")
//we have to use cors in order to host a front end and backend on the same device
var cors = require('cors')
//activate or tell this app variable to be an express server
const app = express()
app.use(cors())
const router = express.Router()

//making an api using routes
// Routes are used to handle browser requests. They look like URLs. The difference is that when a browser requests a route, it is dynamically handled by using a function.

router.get("/songs", function(req,res){
    const songs = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["electro house"]
        },
        {
            title: "Happy",
            artist: "Pharell Williams",
            popularity: 10,
            releaseDate: new Date(2013, 11, 21),
            genre: ["soul", "new soul"]
        }
    ];


    res.json(song)
})

//all requests that usually use an api start with /api... so the url would be localhost:3000/api/songs
>>>>>>> f1a74b878f271689643673a215b7dc39a580973f
app.use("/api", router)
app.listen(3000)