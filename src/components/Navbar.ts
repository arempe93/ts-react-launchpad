import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'

export const Item = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;

  color: ${p => p.theme.grey900};
  cursor: pointer;

  font-weight: 700;
  text-decoration: none;
`

export const TextItem = styled(Item)`
  padding: 0.375rem;

  position: relative;

  color: ${p => p.theme[p.color]};

  font-size: 0.875rem;

  &::after {
    content: '';
    display: none;
    height: 0.125rem;

    bottom: 0;
    left: 0.375rem;
    position: absolute;
    right: 0.375rem;

    background-color: ${p => p.theme[p.hoverColor]};
  }

  &:hover {
    color: ${p => p.theme[p.hoverColor]};

    &::after {
      display: initial;
    }
  }
`

TextItem.defaultProps = {
  color: 'grey900',
  hoverColor: 'grey900'
}

export const IconItem = styled(Item)`
  padding: 0.75rem;

  border-radius: 100%;

  font-size: 1.25rem;

  > ${Icon} {
    width: 1.25rem;

    color: ${p => p.theme[p.color]};
  }

  &:hover {
    background-color: ${p => p.theme[p.hoverColor]};
  }
`

IconItem.defaultProps = {
  color: 'white',
  hoverColor: 'white16'
}

export const Group = styled(Flex)`
  padding: 0 1rem;

  @media (${p => p.theme.smallDesktop}) {
    padding: 0 2rem;
  }
`

export const MobileGroup = styled(Group)`
  @media (${p => p.theme.screens.smallDesktop}) {
    display: none;
  }
`

export const Header = styled.div`
  align-items: center;
  display: flex;
  height: ${p => p.theme.sizes.navbarHeight}rem;
  justify-content: center;
  max-width: 8rem;

  background-color: ${p => p.theme[p.bgColor]};

  @media (${p => p.theme.screens.smallDesktop}) {
    padding: 1rem 4rem 1rem 2rem;
    max-width: initial;
    width: ${p => p.theme.sizes.sidebarWidth}rem;
  }
`

Header.defaultProps = {
  bgColor: 'transparent'
}

const Navbar = styled.nav`
  align-items: center;
  display: flex;
  height: ${p => p.theme.sizes.navbarHeight}rem;
  justify-content: space-between;

  background-color: ${p => p.theme[p.bgColor]};
`

Navbar.defaultProps = {
  bgColor: 'transparent'
}

export default Navbar
