import { GraphQLServer } from 'graphql-yoga';
import { v4 as uuidv4 } from 'uuid';

// Demo user data
let users = [
  {
    id: "1",
    name: "Morol",
    email: "morol@gmail.com",
    age: 24
  },
  {
    id: "2",
    name: "Jinnatul",
    email: "jinnatul@gmail.com",
    age: 23
  },
  {
    id: "3",
    name: "Arif",
    email: "arif@gmail.com",
    age: 22
  }
];

let posts = [
  {
    id: "101",
    title: "First Post",
    body: "Good job guys!!!",
    publish: true,
    author: "1"
  },
  {
    id: "102",
    title: "Second Post",
    body: "Good job guys 2!!!",
    publish: false,
    author: "2"
  },
  {
    id: "103",
    title: "Third Post",
    body: "Good job guys 3!!!",
    publish: true,
    author: "1"
  }
];

let comments = [
  {
    id: "1",
    "text": "comment 1",
    author: "1",
    post: "101"
  },
  {
    id: "2",
    "text": "comment 2",
    author: "2",
    post: "102"
  },
  {
    id: "3",
    "text": "comment 3",
    author: "3",
    post: "103"
  },
  {
    id: "4",
    "text": "comment 4",
    author: "1",
    post: "101"
  }
];

// Type definitions (schema)
const typeDefs = `
  type Query {
    add(nums: [Float!]!): Float!
    grades: [Int!]!
    me: User!
    users(query: String): [User!]!
    post: Post!
    posts(query: String): [Post!]!
    comments: [Comment!]!
  }

  type Mutation {
    createUser(data: CreateUserInput!): User!
    deleteUser(id: ID!): User!
    createPost(data: CreatePostInput!): Post!
    deletePost(id: ID!): Post!
    createComment(data: CreateCommentInput!): Comment!
    deleteComment(id: ID!): Comment!
  }
  
  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  input CreatePostInput {
    title: String!
    body: String!
    publish: Boolean!
    author: ID!
  }

  input CreateCommentInput {
    text: String!
    author: ID!
    post: ID!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    publish: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`
// Resolves
const resolvers = {
  Query: {
    add(parent, args, ctx, info) {
      if (args.nums.length === 0) {
        return 0;
      } else {
        return args.nums.reduce((a, b) => a + b);
      }
    },
    grades() {
      return [2,4,5,6]
    },
    me() {
      return {
        id: "1957",
        name: "Morol",
        email: "morolswediu@gmail.com"
      }
    },
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users
      } else {
        return users.filter((user) => {
          return user.name.toLowerCase().includes(args.query.toLowerCase());
        })
      }
    },
    post() {
      return {
        id: "101",
        title: "First Post",
        body: "Good job guys!!!",
        publish: true
      }
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts
      } else {
        return posts.filter((post) => {
          const isTitleMatch = post.title.toLowerCase().includes(
            args.query.toLowerCase()
          );
          const isBodyMatch = post.body.toLowerCase().includes(
            args.query.toLowerCase()
          );
          return isTitleMatch || isBodyMatch
        })
      }
    },
    comments(parent, args, ctx, info) {
      return comments
    }
  },
  Mutation: {
    createUser(parent, args, ctx, info) {
      const emailTaken = users.some((user) => user.email === args.email);

      if (emailTaken) {
        throw new Error("Email Taken.");
      }

      const user = {
        id: uuidv4(),
        ...args.data
      }

      users.push(user);
      
      return user;
    },
    deleteUser(parent, args, ctx, info) {
      const userIndex = users.findIndex(user => user.id === args.id);

      if (userIndex === -1) {
        throw new Error("User not found.")
      }

      const deleteUsers = users.splice(userIndex, 1);

      posts = posts.filter((post) => {
        const match = post.author === args.id;

        if (match) {
          comments = comments.filter((comment) => {
            comment.post !== post.id
          })
        }

        return !match;
      })
      comments = comments.filter((comment) => {
        comment.author !== args.id;
      })

      return deleteUsers[0];
    },
    createPost(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);

      if (!userExists) {
        throw new Error("User not found.");
      }

      const post = {
        id: uuidv4(),
        ...args.data
      }

      posts.push(post);

      return post;
    },
    deletePost(parent, args, ctx, info) {
      const postIndex = posts.findIndex(post => post.id === args.id);

      if (postIndex === -1) {
        throw new Error("Post not found.")
      }

      const deletePosts = posts.splice(postIndex, 1);

      comments = comments.filter((comment) => {
        comment.post !== args.id;
      });

      return deletePosts[0];
    },
    createComment(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);
      const postExists = posts.some(
        (post) => post.id === args.data.post && post.publish
      );

      if (!userExists || !postExists) {
        throw new Error("Unable to find user & post.");
      }

      const comment = {
        id: uuidv4(),
        ...args.data
      };

      comments.push(comment);

      return comment;
    },
    deleteComment(parent, args, ctx, info) {
      const commentIndex = comments.findIndex(comment => comment.id === args.id);

      if (commentIndex === -1) {
        throw new Error("Comment not found.")
      }

      const deleteComments = comments.splice(commentIndex, 1);

      return deleteComments[0];
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author
      })
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.post === parent.id
      })
    }
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      })
    },
    post(parent, args, ctx, info) {
      return posts.find((post) => {
        return post.id === parent.post
      })
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.author === parent.id
      })
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author === parent.id;
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

const port = 3000;
server.start({port: port}, () => {
  console.log(`Magic run on ${port}`);
})