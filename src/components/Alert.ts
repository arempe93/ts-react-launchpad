import styled, { css } from 'styled-components'

import Icon from '@/components/Icon'

const Alert = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: flex-start;
  padding: 1rem 1.5rem;

  background-color: ${p => p.theme[p.bgColor]};
  border: 1px solid transparent;
  border-radius: 0.375rem;
  box-shadow: ${p => p.theme.shadows.cardShadow};
  color: ${p => p.theme[p.color]};
  overflow: hidden;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25;

  ${Icon} {
    margin-right: 1.25rem;
  }
`

Alert.defaultProps = {
  bgColor: 'primary900',
  color: 'white'
}

export default Alert
