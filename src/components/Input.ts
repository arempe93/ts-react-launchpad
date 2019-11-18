import styled from 'styled-components'

const Input = styled.input`
  height: 2.875rem;
  padding: 0.625rem 0.75rem;
  width: 100%;

  background-color: white;
  border: 1px solid ${p => p.theme.black4};
  border-radius: ${p => p.theme.sizes.borderRadius}rem;
  box-shadow: ${p => p.theme.shadows.raised};
  outline: none;

  font-family: ${p => p.theme.font};
  font-size: 0.875rem;
  line-height: 1.5;

  transition: box-shadow 150ms ease;

  &:focus {
    box-shadow: ${p => p.theme.shadows.raisedMore};
  }

  &::-webkit-input-placeholder {
    color: ${p => p.theme.grey500};
  }
`

export default Input
