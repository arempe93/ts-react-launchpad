import styled from 'styled-components'

const Input = styled.input`
  height: 2.625rem;
  padding: 0.625rem 0.75rem;
  width: 100%;

  border: 1px solid ${p => p.theme.grey200};
  border-radius: ${p => p.theme.sizes.borderRadius}rem;
  outline: none;

  font-family: ${p => p.theme.font};
  font-size: 0.875rem;
  line-height: 1.5;

  transition: box-shadow 150ms ease;

  &:focus {
    background-color: white;
    border-color: ${p => p.theme.primary700};
    box-shadow: 0 0 0px 4px ${p => p.theme.grey50};
  }

  &::-webkit-input-placeholder {
    color: ${p => p.theme.grey500};
  }

  &::selection {
    background: ${p => p.theme.primary200};
  }
`

export default Input
