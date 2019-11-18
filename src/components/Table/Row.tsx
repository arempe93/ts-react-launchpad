import styled, { css } from 'styled-components'

import Cell from './Cell'

const activeStyles = css`
  background-color: ${p => p.theme.catskillWhite50};
`

const clickableStyles = css`
  cursor: pointer;

  &:hover {
    background-color: ${p => p.active ? p.theme.primary100 : p.theme.grey100};

    ${Cell} {
      border-top-color: transparent;
    }
  }
`

const Row = styled.tr`
  display: block;

  ${p => p.active && activeStyles};
  ${p => p.onClick && clickableStyles};

  @media (${p => p.theme.screens.tablet}) {
    display: table-row;
  }

  @media (${p => p.theme.screens.phoneOnly}) {
    &:not(:last-child) {
      border-bottom: 2px solid ${p => p.theme.black2};
    }
  }

  &:first-child {
    ${Cell} {
      border-color: transparent;
    }
  }
`

export default Row
