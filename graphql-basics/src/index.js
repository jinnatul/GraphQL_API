import { GraphQLServer } from 'graphql-yoga';

// Demo user data
const users = [
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

const posts = [
  {
    id: "101",
    title: "First Post",
    body: "Good job guys!!!",
    publish: true
  },
  {
    id: "102",
    title: "Second Post",
    body: "Good job guys 2!!!",
    publish: false
  },
  {
    id: "103",
    title: "Third Post",
    body: "Good job guys 3!!!",
    publish: true
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
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    publish: Boolean!
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