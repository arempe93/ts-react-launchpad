import { ApolloError } from '@apollo/client'
import { GraphQLError } from 'graphql'

type ErrorHandler = (error: GraphQLError) => void

interface HandlerMap {
  [key: string]: ErrorHandler
}

export const handleGraphQLError = (handlers: HandlerMap) => (error: ApolloError) => {
  if (error.networkError || !error.graphQLErrors) throw error

  const defaultHandler = (gqlError: GraphQLError) => (
    handlers.all && handlers.all(gqlError)
  )

  error.graphQLErrors.forEach((gqlError) => {
    const { extensions } = gqlError
    let handler = defaultHandler

    if (extensions) {
      handler = handlers[extensions.code] || defaultHandler
    }

    handler(gqlError)
  })
}
