import styled from 'styled-components'

const BackgroundHeader = styled.div`
  align-items: center;
  display: flex;
  padding: 8rem 0 8rem;

  position: relative;

  background-color: ${p => p.theme[p.bgColor]};

  z-index: -20;

  & + * {
    margin-top: -6rem;
  }
`

BackgroundHeader.defaultProps = {
  bgColor: 'primary600',
  minHeight: 30
}

export default BackgroundHeader
