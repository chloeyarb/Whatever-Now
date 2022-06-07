const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: [6, 'Username must be between 6-20 characters.'],
            maxlength: [20, 'Username must be between 6-20 characters.']
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Must be a valid email address.']
        },
        password: {
            type: String,
            required: true,
            minLength: [5, 'Password too short.'],
            maxLength: [ 25, 'Password too long.' ]
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
    if (this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

userSchema.pre('findOneAndUpdate', async function(next) {
    const docToUpdate = await this.model.findOne(this.getQuery());
    
    const { password } = docToUpdate;

    newPassword = await bcrypt.hash(password, 10);

    this.model.updateOne({$set: {password: newPassword}});

    next();
});

// compare input password to database password
userSchema.methods.checkPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;