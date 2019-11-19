import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  padding: 0 2rem;

  background-color: ${p => p.theme[p.bgColor]};
`

const CenterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
`

const Inner = styled.div`
  max-width: ${p => p.width}rem;
  width: 100%;
`

const Content = ({ children, full, width }) => {
  if (full) {
    return (
      <Wrapper>
        {children}
      </Wrapper>
    )
  }

  return (
    <CenterWrapper>
      <Inner width={width}>
        {children}
      </Inner>
    </CenterWrapper>
  )
}

Content.defaultProps = {
  bgColor: 'transparent',
  width: 68
}

export default Content
