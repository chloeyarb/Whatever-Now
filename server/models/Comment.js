const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        commentBody: {
            type: String,
            required: true,
            maxlength: 200
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
            // date formatter
        }
    }
);

module.exports = commentSchema;