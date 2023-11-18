const express = require("express")
const router = express.Router();
const { AddNote, GetNotes } = require("../controller/index.js")
//Create Notes...   



router.post("/addnote", AddNote)
router.get("/getnotes", GetNotes)



module.exports = router;
