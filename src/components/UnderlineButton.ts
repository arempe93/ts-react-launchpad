import styled, { css } from 'styled-components'

import Button from '@/components/Button'

const compactStyles = css`
  &::after {
    left: 0.875rem;
    right: 0.875rem;
  }
`

const smallStyles = css`
  &::after {
    left: 0.5rem;
    right: 0.5rem;
  }
`

const UnderlineButton = styled(Button)`
  position: relative;

  font-weight: 700;

  &::after {
    content: '';
    display: none;
    height: 0.125rem;

    bottom: 0;
    left: 1.25rem;
    position: absolute;
    right: 1.25rem;

    background-color: ${p => p.theme[p.hoverColor]};
  }

  &:hover {
    background-color: transparent;
    box-shadow: none;
    color: ${p => p.theme[p.hoverColor]};

    &::after {
      display: initial;
    }
  }

  ${p => p.compact && compactStyles};
  ${p => p.small && smallStyles};
`

UnderlineButton.defaultProps = {
  activeColor: 'transparent',
  bgColor: 'transparent',
  color: 'grey800',
  hoverColor: 'grey800'
}

export default UnderlineButton
