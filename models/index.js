const User = require('./User');
const Post = require('./Post');

User.hasMany(Post);

module.exports = {
    User,
    Post,
}