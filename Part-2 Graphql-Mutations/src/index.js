import { GraphQLServer } from 'graphql-yoga';
import db from './db';
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    User,
    Post,
    Comment,
    Query,
    Mutation
  },
  context: {
    db
  }
});

const port = 3000;
server.start({port: port}, () => {
  console.log(`Magic run on ${port}`);
})