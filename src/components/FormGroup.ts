import styled from 'styled-components'

import Text from '@/components/Text'

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

export const Label = styled(Text)`
  display: block;
  margin-bottom: 0.5rem;
  margin-left: 0.375rem;
`

Label.defaultProps = {
  as: 'label',
  color: 'grey800',
  size: 0.75,
  weight: 600
}

export default FormGroup
