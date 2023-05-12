require('express-async-errors');
const User = require('../models/userModel')
const mongoose = require('mongoose');
const user = {
    firstName: "Sarah",
    lastName: "Mendy",
    username: "sarahM",
    email: "sarah.mendy@gmail.com",
};
// const newUser = new User(user)
// const saveUser = newUser.save();
const postArticle = async(req, res) => {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    user.articles.push({
        article_title: req.body.article_title,
        publisher: req.body.publisher,
        img_url: req.body.img_url,
        article_url: req.body.article_url,
        date: req.body.date,
        summary: req.body.summary
    });
    const updated = await user.save();
    res.status(201).json(updated.articles);
}
const getArticles = async(req, res) => {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    const allArticles = user.articles;
    res.status(200).json(allArticles)
}
const getArticle = async(req, res) => {
    const userId = req.params.userId;
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('invalid Id');
    }
    const user = await User.findById(userId);
    const article = user.articles.id(id);
    if(!article){
        res.status(400);
        throw new Error('Article not found');
    }
    res.status(200).json(article);
}
const deleteArticle = async(req, res) => {
    const userId = req.params.userId;
    const id = req.params.id;
    const user = await User.findById(userId);
    const articles = user.articles.id(id);
    if(!articles) {
        res.status(400);
        throw new Error('Article not found');
    }
    user.articles.pull(id);
    const updated = await user.save();
    return res.status(200).json(updated.articles);
}
const postNote = async(req, res) => {
    const userId = req.params.userId;
    if (!req.body.note) {
        res.status(400);
        throw new Error ('please add note');
    }
    const user = await User.findById(userId);
    user.notes.push({
        note: req.body.note,
        article_title: req.body.article_title,
        article_url: req.body.article_url
    });
    const updated = await user.save();
    res.status(201).json(updated.notes);
}
const getNotes = async(req, res) => {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    const allNotes = user.notes;
    res.status(200).json(allNotes)
}
const getNote = async(req, res) => {
    const userId = req.params.userId;
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('invalid Id');
    }
    const user = await User.findById(userId);
    const note = user.notes.id(id);
    if(!note){
        res.status(400);
        throw new Error('Note not found');
    }
    res.status(200).json(note);
}
const editNote = async(req, res) => {
    const userId = req.params.userId;
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('Note not found');
    }
    const user = await User.findById(userId)
    user.notes.id(id).set(req.body);
    const updated = await user.save();
    const edittedNote = updated.notes.id(id);
    res.status(201).json(edittedNote);
}
const deleteNote = async(req, res) => {
    const userId = req.params.userId;
    const id = req.params.id;
    const user = await User.findById(userId);
    const note = user.notes.id(id);
    if(!note) {
        res.status(400);
        throw new Error('Note not found');
    }
    user.notes.pull(id);
    const updated = await user.save();
    return res.status(200).json(updated.notes);
}
module.exports = {
    postArticle, getArticles, getArticle, deleteArticle, postNote, getNotes, getNote, editNote, deleteNote
}