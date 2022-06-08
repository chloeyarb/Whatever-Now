const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [6, "Username must be between 6-20 characters."],
    maxlength: [20, "Username must be between 6-20 characters."],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Must be a valid email address.",
    ],
  },
  password: {
    type: String,
    required: true,
    minLength: [5, "Password too short."],
    // maxlength validation not working with findOneAndUpdate pre hook
    // maxLength: [ 25, 'Password too long.' ]
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

// encrypt password on save
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
// encrypt new password on update
userSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.password) {
    this._update.password = await bcrypt.hash(this._update.password, 10);
  }

  next();
});

// compare input password to database password
userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
