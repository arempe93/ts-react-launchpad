import styled from 'styled-components'

const FixedToTop = styled.div`
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  z-index: ${p => p.theme.sizes.strata.sticky};
`

export default FixedToTop
