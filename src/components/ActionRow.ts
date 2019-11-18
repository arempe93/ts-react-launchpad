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

const rowStyles = css`
  > * + * {
    margin-left: ${p => p.gutter}rem;
  }
`

const ActionRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${p => p.justify};
  flex-direction: ${p => p.direction};

  ${p => (p.direction === 'column' || p.direction === 'column-reverse') && columnStyles};
  ${p => (p.direction === 'row' || p.direction === 'row-reverse') && rowStyles};
  ${p => p.fit && fitStyles}
`

ActionRow.defaultProps = {
  direction: 'row',
  gutter: 1,
  justify: 'flex-start'
}

export default ActionRow
