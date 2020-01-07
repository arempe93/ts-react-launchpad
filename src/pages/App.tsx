import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import LanguageDetector from '@/widgets/LanguageDetector'
import ModalRoot from '@/widgets/ModalRoot'
import SnackbarRoot from '@/widgets/SnackbarRoot'

import theme from '@/theme'

import client from '@/util/apollo'

import { StateProvider } from '@/state'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <StateProvider>
        <GlobalStyle />
        <SnackbarRoot />
        <Router>
          <LanguageDetector />
          <ModalRoot />
          <Switch>
            <Route path='/' render={() => 'Hello world!'} />
          </Switch>
        </Router>
      </StateProvider>
    </ThemeProvider>
  </ApolloProvider>
)

export default hot(App)
