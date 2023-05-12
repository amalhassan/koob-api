const express = require('express');
const userRouter = express.Router();
const {postArticle, getArticles, getArticle, deleteArticle, postNote, getNotes, getNote, editNote, deleteNote} = require('../controllers/userController.js');
// route to post article to read later and get all articles
userRouter.route('/user/:userId/articles').get(getArticles).post(postArticle);
// route  to get specific article and delete article
userRouter.route('/user/:userId/articles/:id').get(getArticle).delete(deleteArticle);
// route to post note and get note
userRouter.route('/user/:userId/notes').get(getNotes).post(postNote);
// route to get note by note id, edit note, and delete note
userRouter.route('/user/:userId/notes/:id').get(getNote).put(editNote).delete(deleteNote);
module.exports = userRouter