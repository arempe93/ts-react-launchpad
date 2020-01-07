import styled from 'styled-components'

const BackgroundHeader = styled.header`
  padding: ${p => p.top}rem 0 ${p => p.bottom}rem;

  background: linear-gradient(65deg, ${p => p.theme[p.bgDarkColor]}, ${p => p.theme[p.bgLightColor]});

  & + * {
    margin-top: -${p => p.bottom - p.buffer}rem;

    z-index: 2;
  }
`

BackgroundHeader.defaultProps = {
  bgDarkColor: 'primary700',
  bgLightColor: 'primary600',
  bottom: 10,
  buffer: 2,
  minHeight: 30,
  top: 6
}

export default BackgroundHeader
