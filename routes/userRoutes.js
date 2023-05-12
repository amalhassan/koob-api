const express = require('express');
const userRouter = express.Router();
const {postNote, getNotes, getNote, editNote, deleteNote} = require('../controllers/userController.js')
// route to post note and get note
userRouter.route('/user/:userId/notes').get(getNotes).post(postNote)
// route to get note by note id, edit note, and delete note
userRouter.route('/user/:userId/notes/:id').get(getNote).put(editNote).delete(deleteNote)
module.exports = userRouter