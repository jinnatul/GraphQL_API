import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    email: String!
  }
`
// Resolves
const resolvers = {
  Query: {
    hello() {
      return 'Welcome to Morol'
    },
    name() {
      return 'Morol'
    },
    email() {
      return 'morolswediu@gmail.com'
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('Magic run on 4000 port!!!');
})