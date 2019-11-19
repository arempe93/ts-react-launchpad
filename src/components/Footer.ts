import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 2rem;

  background-color: ${p => p.theme[p.bgColor]};
`

Footer.defaultProps = {
  bgColor: 'transparent'
}

export default Footer
