import styled, { css } from 'styled-components'

const uppercaseStyles = css`
  text-transform: uppercase;
`

const Text = styled.span`
  color: ${p => p.theme[p.color] || p.color};

  font-family: ${p => p.theme.font};
  font-size: ${p => p.size}rem;
  font-weight: ${p => p.weight};
  line-height: ${p => p.lineHeight};

  ${p => p.uppercase && uppercaseStyles};
`

Text.defaultProps = {
  color: 'grey700',
  lineHeight: 1.15,
  size: 1,
  uppercase: false,
  weight: 400
}

export default Text
