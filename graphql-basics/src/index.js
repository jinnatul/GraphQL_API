import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
  type Query {
    add(num1: Float!, num2: Float!): Float!
    me: User!
    post: Post!
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
      if (args.num1 && args.num2) {
        return args.num1 + args.num2;
      }
    },
    me() {
      return {
        id: "1957",
        name: "Morol",
        email: "morolswediu@gmail.com"
      }
    },
    post() {
      return {
        id: "101",
        title: "First Post",
        body: "Good job guys!!!",
        publish: true
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