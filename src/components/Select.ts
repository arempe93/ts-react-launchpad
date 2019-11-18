import styled from 'styled-components'

import Input from '@/components/Input'

const Select = styled(Input)`
  appearance: none;
  background-color: white;

  cursor: pointer;

  option:disabled {
    color: ${p => p.theme.grey500};
  }
`

Select.defaultProps = {
  as: 'select'
}

export default Select
