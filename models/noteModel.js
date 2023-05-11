const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    note: {
        type: String,
        required: [true, 'Enter a note'],
    },
    article_title: {
        type: String,
    },
    article_url: {
        type: String,
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model('Note', noteSchema);