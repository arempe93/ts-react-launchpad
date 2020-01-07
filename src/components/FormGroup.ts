import styled from 'styled-components'

import Text from '@/components/Text'

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

export const Label = styled(Text)`
  display: block;
  margin-bottom: 0.25rem;
  margin-left: 0.375rem;
`

Label.defaultProps = {
  as: 'label',
  color: 'grey800',
  size: 0.75,
  weight: 600
}

export const HelpText = styled(Text)`
  display: block;
  margin-left: 0.375rem;
  margin-top: 0.5rem;

  text-align: ${p => p.right ? 'right' : 'left'};
`

HelpText.defaultProps = {
  color: 'grey600',
  right: false,
  size: 0.75
}

export default FormGroup
