const express = require("express")
const router = express.Router();
const { AddNote } = require("../controller/index.js")
//Create Notes...   



router.post("/addnote", AddNote)
router.get("/getnotes",)



module.exports = router;
