import styled, { css } from 'styled-components'

// import Icon from '@components/Icon'

const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 0.375rem;
  box-shadow: ${p => p.theme.shadows.dropdownShadow};

  z-index: 100;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 1px solid ${p => p.theme.black8};

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }
`

const activeStyles = css`
  background-color: ${p => p.theme[p.hoverColor]};
  outline: none;

  text-decoration: none;
`

export const Item = styled.li`
  align-items: center;
  display: flex;
  height: 3rem;
  padding: 0 1.5rem;

  cursor: pointer;

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }

  &:hover, &:focus {
    ${activeStyles}
  }

  ${p => p.active && activeStyles}
`

// ^^^ after hover,focus
// ${Icon} {
//   align-items: center;
//   justify-content: center;
//   margin-right: 1rem;
// }

Item.defaultProps = {
  active: false,
  hoverColor: 'hoverGrey',
  tabIndex: 0
}

export default Dropdown
