import styled, { css } from 'styled-components'

const columnStyles = css`
  > * + * {
    margin-top: ${p => p.gutter}rem;
  }
`

const fitStyles = css`
  > * {
    flex: 1;
  }
`

const fullStyles = css`
  flex: 1;
  width: 100%;
`

const rowStyles = css`
  > * + * {
    margin-left: ${p => p.gutter}rem;
  }
`

const Flex = styled.div`
  align-items: ${p => p.align};
  display: flex;
  justify-content: ${p => p.justify};
  flex-direction: ${p => p.direction};

  ${p => (p.direction === 'column' || p.direction === 'column-reverse') && columnStyles};
  ${p => (p.direction === 'row' || p.direction === 'row-reverse') && rowStyles};
  ${p => p.fit && fitStyles};
  ${p => p.full && fullStyles};
`

Flex.defaultProps = {
  align: 'center',
  direction: 'row',
  gutter: 1,
  justify: 'flex-start'
}

export default Flex
