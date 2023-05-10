require('express-async-errors');
const postArticle = async(req, res) => {
    res.status(201).json({message: "post api for article"})
}

const getArticles = async(req, res) => {
    res.status(200).json({message: "get api for articles"})
}

const getArticle = async(req, res) => {
    res.status(200).json({message: "get api for specific articles"})
}

const deleteArticle = async(req, res) => {
    return res.sendStatus(204)
}

const postNote = async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error ('please add note')
    }
    res.status(201).json({message: "post api for note"})
}

const getNotes = async(req, res) => {
    res.status(200).json({message: "get api for notes"})
}

const getNote = async(req, res) => {
    res.status(200).json({message: "get api for specific note"})
}

const editNote = async(req, res) => {
    res.status(201).json({message: "put api for specific note"})
}

const deleteNote = async(req, res) => {
    return res.sendStatus(204)
}

module.exports = {
    postArticle, getArticles, getArticle, deleteArticle, postNote, getNotes, getNote, editNote, deleteNote
}