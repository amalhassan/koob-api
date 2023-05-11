require('express-async-errors');
const Note = require('../models/noteModel')
const mongoose = require('mongoose');
const postNote = async(req, res) => {
    if (!req.body.note) {
        res.status(400)
        throw new Error ('please add note')
    }
    const note = await Note.create({
        note: req.body.note,
        article_title: req.body.article_title,
        article_url: req.body.url
    })
    res.status(201).json(note)
}

const getNotes = async(req, res) => {
    const notes = await Note.find()
    res.status(200).json(notes)
}

const getNote = async(req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('Note not found');
    }
    const note = await Note.findById(id);
    res.status(200).json(note)
}

const editNote = async(req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('Note not found');
    }
    const editedNote = await Note.findByIdAndUpdate(id, req.body, {new: true,})
    res.status(201).json(editedNote);
}

const deleteNote = async(req, res) => {
    const id = req.params.id;
    const note = await Note.findById(id);
    if(!note) {
        res.status(400);
        throw new Error('Note not found');
    }
    await note.deleteOne()
    return res.status(200).json({id: id})
}

module.exports = {
    postNote, getNotes, getNote, editNote, deleteNote
}