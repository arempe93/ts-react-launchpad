import styled from 'styled-components'

import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

const SidebarLayout = styled(Layout)`
  margin-top: ${p => p.theme.sizes.navbarHeight}rem;

  @media (${p => p.theme.screens.smallDesktop}) {
    margin-left: ${p => p.theme.sizes.sidebarWidth}rem;

    & + ${Footer} {
      margin-left: ${p => p.theme.sizes.sidebarWidth}rem;
    }
  }
`

export default SidebarLayout
