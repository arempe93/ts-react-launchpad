import styled from 'styled-components'

import Input from '@/components/Input'

const TextArea = styled(Input).attrs({
  as: 'textarea',
  rows: 3
})`
  padding-top: 0.75rem;
`

export default TextArea
