const { graphql } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');

const books = [
  { title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling" },
  { title: "Jurassic Park",
    author: "Michael Crichton" },
];

const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

const resolvers = {
  Query: { books: () => books },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const query = `{ books { title, author } }`;

graphql(schema, query).then((result) =>
  console.log('Got result:', JSON.stringify(result, null, 2)));
