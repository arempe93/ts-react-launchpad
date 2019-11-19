import styled from 'styled-components'

import Text from '@/components/Text'

const Anchor = styled(Text).attrs({
  as: 'a',
  rel: 'noopenner noreferrer'
})`
  &:visited {
    color: ${p => p.theme[p.color]};
  }

  &:hover {
    color: ${p => p.theme[p.hoverColor]};
  }
`

Anchor.defaultProps = {
  color: 'primary700',
  hoverColor: 'primary700'
}

export default Anchor
