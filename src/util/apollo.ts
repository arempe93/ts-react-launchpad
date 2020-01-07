import { ApolloClient, ApolloLink, from, gql, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from 'apollo-link-error'

import { DANGER, show } from '@/state/snackbar'

import ls, { ACCESS_TOKEN, REFRESH_TOKEN } from '@/util/localstore'

import { GRAPHQL_URL } from '@/settings'

export const APP_VERSION_HEADER = 'x-app-version'
export const AUTH_HEADER = 'authorization'
export const NEW_TOKEN_HEADER = 'x-gravy-token'
export const PLATFORM_HEADER = 'x-platform'
export const REFRESH_HEADER = 'x-gravy-refresh'
export const REQUEST_ID_HEADER = 'x-request-id'

const authMiddleware = new ApolloLink((operation, forward) => {
  const customHeaders = {
    [APP_VERSION_HEADER]: 'v0.0.0-alpha', // TODO: set real value for version header
    [PLATFORM_HEADER]: 'web'
  }

  const accessToken = ls.get(ACCESS_TOKEN)
  if (accessToken) customHeaders[AUTH_HEADER] = accessToken

  const refreshToken = ls.get(REFRESH_TOKEN)
  if (refreshToken) customHeaders[REFRESH_HEADER] = refreshToken

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      ...customHeaders
    }
  }))

  return forward(operation)
})

const httpLink = new HttpLink({
  uri: GRAPHQL_URL
})

const tokenRefreshLink = new ApolloLink((operation, forward) => (
  forward(operation).map((response) => {
    const { response: { headers } } = operation.getContext()
    const newToken = headers.get(NEW_TOKEN_HEADER)

    if (newToken) ls.set(ACCESS_TOKEN, newToken)

    return response
  })
))

const serverErrorLink = onError(({ networkError }) => {
  if (networkError) {
    console.error(networkError)
    show(networkError.message, DANGER)
  }
})

const loggerLink = new ApolloLink((operation, forward) => (
  forward(operation).map((response) => {
    const context = operation.getContext()
    const requestId = context.response.headers.get(REQUEST_ID_HEADER)

    console.log(`[${requestId}]`, { context, operation, response })

    return response
  })
))

const httpLinkWithMiddleware = loggerLink.concat(
  serverErrorLink.concat(
    tokenRefreshLink.concat(httpLink)
  )
)

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authMiddleware,
    httpLinkWithMiddleware
  ]),
  resolvers: {}
})
