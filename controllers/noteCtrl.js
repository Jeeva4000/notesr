// const Notes = require("../models/noteModel")


// const noteCtrl = {
//     getNotes: async (req, res) => {
//         try {
//             res.json(req.user.id)
//             const notes = await Notes.find({ user_id: req.user.id })
//         } catch (error) {
//             return res.status(500).json({ msg: err.message })
//         }
//     }
// }

const Notes = require("../models/noteModel");

const noteCtrl = {
    getNotes: async (req, res) => {
        try {
            // res.json({ userId: req.user.id });
            const notes = await Notes.find({ user_id: req.user.id });
            res.json(notes)
        } catch (error) {

            return res.status(500).json({ msg: error.message });
        }
    },
    createNote: async (req, res) => {
        try {
            const { title, content, date } = req.body;
            // res.json({ user_id: req.user.id, name: req.user.name })
            const newNote = new Notes({
                title,
                content,
                date,
                user_id: req.user.id,
                name: req.user.name
            })
            await newNote.save()
            res.json({ msg: "Notes Added Successfully" })
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    deletNote: async (req, res) => {
        try {
            await Notes.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted Successfully" })
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    updateNote: async (req, res) => {
        try {
            const { title, content, date } = req.body;
            await Notes.findOneAndUpdate({ _id: req.params.id }, {
                title,
                content,
                date
            })
            res.json({ msg: "Update Successfully" })
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getNote: async (req, res) => {
        try {
            const note = await Notes.findById(req.params.id)
            res.json(note)
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
};

module.exports = noteCtrl;
