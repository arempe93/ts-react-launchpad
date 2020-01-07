import React, { Component } from 'react'
import ClickOutHandler from 'react-clickout-handler'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'

import Alert from '@/components/Alert'
import Icon from '@/components/Icon'

import Portal from '@/widgets/Portal'

import { withState } from '@/state'
import { hide, selectIfVisible, selectMessage, selectOptions } from '@/state/snackbar'

const ICONS = {
  success: 'check',
  info: 'info-circle',
  warning: 'exclamation-triangle',
  error: 'times-circle'
}

const duration = 300

const defaultStyle = {
  transform: 'translate3d(0,calc(100% + 80px),0)',
  transition: `transform ${duration}ms ease-in-out`
}

const transitionStyles = {
  entered: { transform: 'translate3d(0,0,0)' },
  entering: { transform: 'translate3d(0,calc(100% + 80px),0)' }
}

const Wrapper = styled.div`
  min-width: 24rem;

  bottom: 2.5rem;
  position: fixed;
  right: 2.5rem;

  > ${Alert} {
    width: 100%;
  }

  @media (${p => p.theme.screens.phoneOnly}) {
    bottom: 2rem;
    left: 1.5rem;
    right: 1.5rem;
  }
`

class SnackbarRoot extends Component {
  private handleClickOut = () => this.props.isVisible && hide()

  public render() {
    const { isVisible, message, options } = this.props

    return (
      <Transition
        unmountOnExit
        in={isVisible}
        timeout={{ enter: 0, exit: duration }}
      >
        {state => (
          <Portal>
            <ClickOutHandler
              enabled={isVisible}
              onClickOut={this.handleClickOut}
            >
              <Wrapper
                role='alert'
                style={{ ...defaultStyle, ...transitionStyles[state] }}
              >
                <Alert {...options}>
                  {options.icon &&
                    <Icon fixedWidth name={options.icon} />
                  }
                  {message}
                </Alert>
              </Wrapper>
            </ClickOutHandler>
          </Portal>
        )}
      </Transition>
    )
  }
}

export default withState(state => ({
  isVisible: selectIfVisible(state),
  message: selectMessage(state),
  options: selectOptions(state)
}))(SnackbarRoot)
