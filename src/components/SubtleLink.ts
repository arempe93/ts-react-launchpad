import { Link as _Link } from 'react-router-dom'
import styled from 'styled-components'

import Link from '@/components/Link'

const SubtleLink = styled(Link)`
  text-decoration: none;
`

SubtleLink.defaultProps = {
  as: _Link,
  color: 'grey700',
  lineHeight: 1.15,
  size: 1,
  uppercase: false,
  weight: 400
}

export default SubtleLink
