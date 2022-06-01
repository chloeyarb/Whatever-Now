const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
          return User.find()
          .select('-__v -password')
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
          const token = signToken(user);
          return { token, user };
        },
        addPost: async (parent, args, context) => {
            if (context.user) {

                const post = await Post.create({...args, username: context.user.username});

                await User.findByIdAndUpdate(
                    {_id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                );
      
                return post;
            }

            throw new AuthenticationError('You must be logged in to post.')

        },
        like: async (parent, { postId }, context) => {
            if(context.user) {
                return Post.findByIdAndUpdate(
                    { _id: postId },
                    { $addToSet: { likes: context.user._id }},
                    { new: true }
                )
            }

            throw new AuthenticationError('You must be logged in to like a post.')
        },
        login: async (parent, { email, password}) => {
          const user = await User.findOne({ email });

          if (!user) {
              throw new AuthenticationError('Invalid username!')
          }
          const correctPw = await user.checkPassword(password);

          if (!correctPw) {
              throw new AuthenticationError('Invalid password!')
          }

          const token = signToken(user);

          return { token, user };
        }
        
    }
}

module.exports = resolvers;