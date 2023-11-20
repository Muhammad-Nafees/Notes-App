const express = require("express")
const router = express.Router();
const UserModal = require("../db/model/UserModal")


const AddNote = async (req, res) => {

    const { title, description } = req.body

    try {

        const note = await new UserModal({
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
    const noteId = req.params.id;

    try {
        const getNote = await UserModal.findById(noteId);
        console.log("GetNote", getNote);

        if (!getNote) {
            return res.status(404).json({ message: "Note not found", success: false });
        }

        res.status(200).json({ message: "Read Successfully", success: true, data: getNote });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", success: false });
    }
}

const updateNode = async () => {

    try {
        const updateNodeId = req.params.id;
        const updateNode = await UserModal.findByIdAndUpdate(updateNodeId)
        console.log("UpdateNode", updateNode)

    } catch (error) {
        console.log(error)
    }

}

module.exports = { AddNote, GetNotes, updateNode };
