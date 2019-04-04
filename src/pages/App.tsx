import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import ModalRoot from '@/widgets/ModalRoot'
import SnackbarRoot from '@/widgets/SnackbarRoot'

import theme from '@/theme'

import { StateProvider } from '@/state'

const App = () => (
  <ThemeProvider theme={theme}>
    <StateProvider>
      <GlobalStyle />
      <ModalRoot />
      <SnackbarRoot />
      <Router>
        <Switch>
          <Route path='/' render={() => 'Hello world!'} />
        </Switch>
      </Router>
    </StateProvider>
  </ThemeProvider>
)

export default hot(App)