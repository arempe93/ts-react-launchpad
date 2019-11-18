import React from 'react'
import styled from 'styled-components'

import Padding from './Padding'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Inner = styled.div`
  flex: 1;
  max-width: ${p => p.width}rem;
  width: 100%;
`

const Center = ({ children, width = 25 }) => (
  <Padding>
    <Wrapper>
      <Inner width={width}>
        {children}
      </Inner>
    </Wrapper>
  </Padding>
)

export default Center
