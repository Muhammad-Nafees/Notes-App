const express = require("express")
const router = express.Router();
const UserModal = require("../db/model/UserModal")


const AddNote = async (req, res) => {

    const { title, description } = req.body

    try {

        const note = new UserModal({
            title: title,
            description: description
        })

        await note.save()
        res.status(201).json({ message: "Notes Created", success: true })

    } catch (error) {
        res.status(500).json(error)
    }
}



const GetNotes = async (req, res) => {

    try {
        console.log("req.params", req.params)
    } catch (error) {

        console.log(error)

    }

}

module.exports = { AddNote, GetNotes };
