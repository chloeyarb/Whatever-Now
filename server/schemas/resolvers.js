const { User, Post } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
          return User.find()
          .select('-__v')
          .populate('posts')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          return user;
        },
        addPost: async (parent, args) => {
          const post = await Post.create(args)
        }
    }
}

module.exports = resolvers;