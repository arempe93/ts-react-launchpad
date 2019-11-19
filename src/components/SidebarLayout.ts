import styled from 'styled-components'

import Footer from '@/components/Footer'

const SidebarLayout = styled.main`
  flex: 1;
  margin-left: ${p => p.theme.sizes.sidebarWidth}rem;

  position: relative;

  & + ${Footer} {
    margin-left: ${p => p.theme.sizes.sidebarWidth}rem;
  }
`

export default SidebarLayout
