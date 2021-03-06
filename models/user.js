const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  bio: String,
  email: { type: String, unique: true },
  password: String,
  profileImg: {type: String, default: 'https://cdn2.iconfinder.com/data/icons/essential-web-2/50/user-ciecle-round-account-person-512.png'}
});

userSchema.virtual('comments', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'comments.username'
});

userSchema.virtual('addedPosts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'addedBy'
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
