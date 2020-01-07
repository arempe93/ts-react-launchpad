import styled from 'styled-components'

export const Item = styled.div`
  padding: 1rem 1.5rem;

  border-top: 1px solid ${p => p.theme[p.borderColor]};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.grey50};
  }

  &:first-child {
    border-top-color: transparent;
  }
`

Item.defaultProps = {
  borderColor: 'grey100'
}

const List = styled.nav`
  display: flex;
  flex-direction: column;

  &:last-child {
    border-radius: 0 0 0.375rem 0.375rem;

    > ${Item}:last-child {
      border-radius: 0 0 0.375rem 0.375rem;
    }
  }
`

export default List
