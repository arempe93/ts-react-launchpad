import styled from 'styled-components'

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 70%;

  > * + * {
    margin-top: 1.5rem;
  }
`

export const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  padding-left: 1.5rem;

  > * + * {
    margin-top: 1.5rem;
  }
`

const DetailLayout = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
`

export default DetailLayout
