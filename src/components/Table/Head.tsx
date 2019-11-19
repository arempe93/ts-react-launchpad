import styled from 'styled-components'

const Head = styled.thead`
  display: none;

  background-color: ${p => p.theme.grey50};

  @media (${p => p.theme.screens.tablet}) {
    display: table-header-group;
  }
 `

export default Head
