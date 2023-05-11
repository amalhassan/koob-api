const express = require('express');
const noteRouter = express.Router();
const {postNote, getNotes, getNote, editNote, deleteNote} = require('../controllers/noteController.js')

// post article to read later and get all articles
// userRouter.route('/articles').get(getArticles).post(postArticle)


// get specific article and delete article
// userRouter.route('/articles/:id').get(getArticle).delete(deleteArticle)

// route to post note and get note
noteRouter.route('/').get(getNotes).post(postNote)

// route to get note by note id, edit note, and delete note
noteRouter.route('/:id').get(getNote).put(editNote).delete(deleteNote)

module.exports = noteRouter