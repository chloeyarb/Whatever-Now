const { User, Post } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
          return User.find()
          .select('-__v password')
          .populate('posts')
        },
        posts: async (parent, { username }) => {
          const params = username ? { username } : {};
          return Post.find(params).sort({ createdAt: -1 });
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
          .select('-__v -password')
          .populate('posts')
        },
        post: async (parent, { username }) => {
          return Post.findOne({ username })
          .select('-__v -password')
          .populate('likes')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          return user;
        },
        addPost: async (parent, { postText, userId, username }) => {
          const post = await Post.create({ postText, username});

          await User.findByIdAndUpdate(
              {_id: userId },
              { $push: { posts: post._id } },
              { new: true }
          );

          return post;
        }
    }
}

module.exports = resolvers;