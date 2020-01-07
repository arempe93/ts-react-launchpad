import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ModalProvider } from 'react-modal-hook'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import LanguageDetector from '@/widgets/LanguageDetector'
import SnackbarRoot from '@/widgets/SnackbarRoot'

import { StateProvider } from '@/state'

import client from '@/util/apollo'

import theme from '@/theme'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <StateProvider>
        <GlobalStyle />
        <SnackbarRoot />
        <Router>
          <ModalProvider>
            <LanguageDetector />
            <Switch>
              <Route path='/'>
                Hello world!
              </Route>
            </Switch>
          </ModalProvider>
        </Router>
      </StateProvider>
    </ThemeProvider>
  </ApolloProvider>
)

export default hot(App)
