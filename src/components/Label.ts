import styled, { css } from 'styled-components'

import Icon from '@/components/Icon'

const Label = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0.25rem 0.5rem;

  background-color: ${p => p.theme[p.bgColor]};
  border: 1px solid transparent;
  border-radius: 0.375rem;
  color: ${p => p.theme[p.color]};
  overflow: hidden;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.25;
  text-decoration: none;
  text-transform: uppercase;

  ${Icon} {
    margin-right: 0.375rem;
  }
`

Label.defaultProps = {
  bgColor: 'primary500',
  color: 'white'
}

export default Label
