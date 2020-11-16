import { gql } from "apollo-server-micro";

const schema = gql`
  type Book {
    id: ID!
    title: String!
    authorId: ID!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type LiveStream {
    id: ID!
    name: String!
    imageUrl: String
    description: String
    websiteUrl: String
    streamUrl: String
  }

  type Query {
    book(id: ID!): Book
    books: [Book]
    author(id: ID!): Author
    authors: [Author]
    livestream(id: ID!): LiveStream
    livestreams: [LiveStream]
    test: String!
  }

  type Mutation {
    createAuthor(name: String!): Author!
    createBook(title: String!, authorId: ID!): Book!
    deleteAuthor(id: ID!): ID
  }
`;

export default schema;
