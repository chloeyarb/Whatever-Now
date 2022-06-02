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

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 300,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // date formatter here
        },
        username: {
            type: String,
            required: true,
        },
        comments: [commentSchema],
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

postSchema.virtual('likeCount').get(function() {
    return this.likes.length;
});

const Post = model('Post', postSchema);

module.exports = Post;