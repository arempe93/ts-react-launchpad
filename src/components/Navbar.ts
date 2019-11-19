import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import ActionRow from '@/components/ActionRow'

export const Item = styled(NavLink)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: ${p => p.theme.sizes.navbarHeight};
`

export const Group = styled(ActionRow)`
  padding: 0 2rem;
`

const Navbar = styled.nav`
  align-items: center;
  display: flex;
  height: ${p => p.theme.sizes.navbarHeight}rem;
  justify-content: space-between;

  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  background-color: ${p => p.theme[p.bgColor]};
`

Navbar.defaultProps = {
  bgColor: 'primary900'
}

export default Navbar
