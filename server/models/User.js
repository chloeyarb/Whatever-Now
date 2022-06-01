const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post'
            }
        ],
    }
);

// encrypt password on save
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

// compare input password to database password
userSchema.methods.checkPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;