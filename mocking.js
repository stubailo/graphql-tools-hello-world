const { graphql } = require('graphql');
const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');

const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

const schema = makeExecutableSchema({ typeDefs });
const mockedSchema = addMockFunctionsToSchema({ schema });

const query = `{ books { title, author } }`;

graphql(schema, query).then((result) =>
  console.log('Got result:', JSON.stringify(result, null, 2)));
