import styled, { css } from 'styled-components'

import Icon from '@/components/Icon'

const blockStyles = css`
  width: 100%;

  line-height: 1.75;
`

const compactStyles = css`
  padding: 0.375rem 0.875rem;

  font-size: 0.875rem;
  line-height: 1.15;

  ${Icon} {
    margin-right: 0.625rem;
  }
`

const smallStyles = css`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;

  ${Icon} {
    margin-right: 0.375rem;
  }
`

const Button = styled.button`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0.625rem 1.25rem;

  background-color: ${p => p.theme[p.bgColor]};
  border: 1px solid transparent;
  border-radius: 0.375rem;
  color: ${p => p.theme[p.color]};
  cursor: pointer;
  outline: none;
  overflow: hidden;

  font-family: ${p => p.theme.fontsans};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25;
  text-decoration: none;

  &:focus {
    background-color: ${p => p.theme[p.activeColor]};
  }

  &:hover {
    box-shadow: ${p => p.theme.shadows.raisedMore};
  }

  &[disabled] {
    background-color: ${p => p.theme[p.disabledColor]};
    cursor: not-allowed;
  }

  ${Icon} {
    margin-right: 0.875rem;
  }

  ${p => p.block && blockStyles};
  ${p => p.compact && compactStyles};
  ${p => p.small && smallStyles};
`

Button.defaultProps = {
  activeColor: 'primary700',
  bgColor: 'primary600',
  color: 'white',
  disabledColor: 'primary400',
  type: 'button'
}

export default Button
