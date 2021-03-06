import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  padding: 0 1rem;
  padding-bottom: ${p => p.padBottom}rem;
  padding-top: ${p => p.padTop}rem;

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

const Content = ({ children, full, width, ...rest }) => {
  if (full) {
    return (
      <Wrapper {...rest}>
        {children}
      </Wrapper>
    )
  }

  return (
    <CenterWrapper {...rest}>
      <Inner width={width}>
        {children}
      </Inner>
    </CenterWrapper>
  )
}

Content.defaultProps = {
  bgColor: 'transparent',
  padBottom: 0,
  padTop: 0,
  width: 72
}

export default Content
