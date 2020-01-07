import React from 'react'
import styled from 'styled-components'

import Icon from '@/components/Icon'

const Wrapper = styled.div`
  align-items: center;
  display: inline-flex;
  padding: 0.375rem 0.5rem;

  background-color: ${p => p.theme[p.bgColor]};
  border-radius: 0.375rem;
  color: ${p => p.theme[p.color]};

  font-size: 0.875rem;
  line-height: 1.15;
`

Wrapper.defaultProps = {
  bgColor: 'grey100',
  color: 'grey700'
}

const Remove = styled.div`
  align-items: center;
  display: flex;
  margin: -0.25rem -0.5rem -0.25rem 0;
  padding: 0.25rem 0.5rem;

  color: ${p => p.theme[p.color]};
  cursor: pointer;

  font-size: 0.75rem;
`

Remove.defaultProps = {
  bgColor: 'grey100',
  color: 'grey700'
}

interface Props {
  bgColor?: string
  color?: string
  id: string | number
  name: string
  onRemove?: (id: string | number) => void
}

const Tag = ({ id, name, onRemove, ...rest }: Props) => (
  <Wrapper {...rest}>
    {name}
    {onRemove &&
      <Remove
        {...rest}
        onClick={() => onRemove(id)}
      >
        <Icon name='times' />
      </Remove>
    }
  </Wrapper>
)

export default Tag
