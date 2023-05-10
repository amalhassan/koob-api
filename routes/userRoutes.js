const express = require('express');
const userRouter = express.Router();
const {postArticle, getArticles, getArticle, deleteArticle, postNote, getNotes, getNote, editNote, deleteNote} = require('../controllers/userInfoController.js')

// post article to read later and get all articles
userRouter.route('/articles').get(getArticles).post(postArticle)


// get specific article and delete article
userRouter.route('/articles/:id').get(getArticle).delete(deleteArticle)

// route to post note and get note
userRouter.route('/notes').get(getNotes).post(postNote)

// route to get note by note id, edit note, and delete note
userRouter.route('/notes/:id').get(getNote).put(editNote).delete(deleteNote)

module.exports = userRouter