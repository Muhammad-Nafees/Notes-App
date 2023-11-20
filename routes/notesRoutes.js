const express = require("express")
const router = express.Router();
const { AddNote, GetNotes, updateNode } = require("../controller/index.js")
//Create Notes...   



router.post("/addnote", AddNote)
router.get("/getnotes/:id", GetNotes)
router.get("/updatenode/:id", updateNode)



module.exports = router;
