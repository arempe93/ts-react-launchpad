import styled from 'styled-components'

const Head = styled.thead`
  display: none;

  background-color: #F6F9FC;

  @media (${p => p.theme.screens.tablet}) {
    display: table-header-group;
  }
 `

export default Head
