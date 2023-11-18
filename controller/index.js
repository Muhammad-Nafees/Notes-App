const express = require("express")
const router = express.Router();
const UserModal = require("../db/model/UserModal")


const AddNote = async (req, res) => {

    const { title, description } = req.body

    try {
        const note = new UserModal({
            title,
            description
        })

        await note.save()
        res.status(201).json({ message: "Notes Created", success: true })

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { AddNote };
