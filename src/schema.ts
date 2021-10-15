import { gql } from 'apollo-server'

/**
 * Type definitions for the GraphQL schema.
 */
const typeDefs = gql`
  type Query {
    hello: String
  }
`
/**
 * Resolvers for the GraphQL schema.
 */
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

export { typeDefs, resolvers }
