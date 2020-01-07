import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Icon from '@/components/Icon'
import Text from '@/components/Text'

const activeStyles = css`
  color: ${p => p.theme.grey900};

  font-weight: 700;

  ${Icon} {
    color: ${p => p.theme.grey900};
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  &:first-child {
    margin-top: 2rem;
  }
`

export const Item = styled(NavLink)`
  align-items: center;
  display: flex;
  padding: 0.875rem 1rem;
  margin: 0 1rem;

  border-radius: 0.25rem;
  color: ${p => p.theme.grey600};
  cursor: pointer;

  text-decoration: none;

  ${Icon} {
    margin-right: 1.25rem;
    width: 1.375rem;

    color: ${p => p.theme.grey500};

    font-size: 1.25rem;
  }

  &:hover {
    background-color: ${p => p.theme.hoverGrey};
  }

  &.active {
    ${activeStyles};
  }

  ${p => p.active && activeStyles};
`

export const Title = styled(Text)`
  margin-bottom: 1rem;
  padding: 0 2rem;

  text-transform: uppercase;
`

Title.defaultProps = {
  color: 'grey900',
  size: 0.75,
  weight: 700
}

const openStyles = css`
  transform: translate3d(${p => p.theme.sizes.sidebarWidth}rem, 0, 0);
`

const Sidebar = styled.div`
  width: ${p => p.theme.sizes.sidebarWidth}rem;

  bottom: 0;
  left: -${p => p.theme.sizes.sidebarWidth}rem;
  position: fixed;
  top: ${p => p.theme.sizes.navbarHeight}rem;

  background-color: white;
  border-right: 1px solid ${p => p.theme.grey200};
  overflow-y: auto;

  transition: transform 0.3s ease-in-out;
  z-index: ${p => p.theme.sizes.strata.sticky};

  @media (${p => p.theme.screens.smallDesktop}) {
    left: 0;

    background-color: transparent;
  }

  ${p => p.isOpen && openStyles};
`

export default Sidebar
