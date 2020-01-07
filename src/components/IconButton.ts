import styled from 'styled-components'

import Icon from '@/components/Icon'

const IconButton = styled.button`
  align-items: center;
  display: flex;
  height: ${p => p.width + p.padding}rem;
  justify-content: center;
  width: ${p => p.width + p.padding}rem;

  appearance: none;
  border: none;
  border-radius: 100%;
  color: ${p => p.theme[p.color]};
  cursor: pointer;
  outline: none;

  font-size: ${p => p.size}rem;

  ${Icon} {
    width: ${p => p.width}rem;
  }

  &:hover {
    background-color: ${p => p.theme[p.hoverColor]};
  }

  &:active {
    background-color: ${p => p.theme[p.activeColor]};
  }
`

IconButton.defaultProps = {
  activeColor: 'grey200',
  color: 'grey700',
  hoverColor: 'hoverGrey',
  padding: 1.5,
  size: 1,
  width: 1
}

export default IconButton
