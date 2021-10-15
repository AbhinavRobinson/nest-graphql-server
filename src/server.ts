import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './schema'

/**
 * @description Creates an Apollo Server instance
 * @returns {ApolloServer} Server instance
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

/**
 * @description Starts the server
 */
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
