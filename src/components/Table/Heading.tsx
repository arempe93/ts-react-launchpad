import styled from 'styled-components'

import Cell from './Cell'

const Heading = styled(Cell).attrs({
  as: 'th'
})`
  padding: 0.5rem 1rem;

  color: ${p => p.theme.grey600};

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  vertical-align: bottom;
`

export default Heading
