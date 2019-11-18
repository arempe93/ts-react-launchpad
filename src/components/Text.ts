import styled from 'styled-components'

const Text = styled.span`
  color: ${p => p.theme[p.color] || p.color};

  font-family: ${p => p.theme.font};
  font-size: ${p => p.size}rem;
  font-weight: ${p => p.weight};
  line-height: ${p => p.lineHeight};
`

Text.defaultProps = {
  color: 'black72',
  lineHeight: 1.15,
  size: 1,
  weight: 400
}

export default Text
