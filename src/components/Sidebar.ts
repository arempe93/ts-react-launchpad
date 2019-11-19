import styled, { css } from 'styled-components'

import Icon from '@/components/Icon'
import Text from '@/components/Text'

const activeStyles = css`
  color: ${p => p.theme.primary500};

  font-weight: 700;

  ${Icon} {
    color: ${p => p.theme.primary700};
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`

export const Item = styled.div`
  align-items: center;
  display: flex;
  padding: 0.875rem 1rem;
  margin: 0 1rem;

  border-radius: 0.25rem;
  color: ${p => p.theme.grey600};
  cursor: pointer;

  ${Icon} {
    margin-right: 1.25rem;

    color: ${p => p.theme.grey500};
  }

  &:hover {
    background-color: ${p => p.theme.hoverGrey};
  }

  ${p => p.active && activeStyles};
`

export const Title = styled(Text)`
  margin-bottom: 1.5rem;
  padding: 0 2rem;

  text-transform: uppercase;
`

Title.defaultProps = {
  color: 'grey900',
  size: 0.75,
  weight: 700
}

const Sidebar = styled.div`
  width: ${p => p.theme.sizes.sidebarWidth}rem;

  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;

  background-color: white;
  box-shadow: ${p => p.theme.shadows.raised};
`

export default Sidebar
