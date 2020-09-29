const { model } = require('mongoose');
const PostSchema = require('../migrations/postSchema');

const postSchema = require('../migrations/postSchema');

const Post = model('Post', PostSchema);

module.exports = Post;