const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Enter a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Enter a last name']
    },
    username: {
        type: String,
        required: [true, 'Enter a username'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Enter an email'],
        unique: true,
    },
    notes: [
        {
            note: {
                type: String,
            },
            article_title: {
                type: String,
            },
            article_url: {
                type: String,
            }, 
        }
    ],
    articles: [
        {
            article_title: {
                type: String,
            },
            publisher: {
                type: String,
            },
            img_url: {
                type: String,
            },
            article_url: {
                type: String,
            },
            date: {
                type: String
            },
            summary: {
                type: String,
            }
        }
    ]
    
}, {
    timestamps: true,
})
module.exports = mongoose.model('User', userSchema);