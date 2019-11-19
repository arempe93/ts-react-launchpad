import styled, { css } from 'styled-components'

import Input from '@/components/Input'

export const Prefix = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 2.875rem;
  order: 1;
  padding: 0.625rem 0.125rem 0.625rem 0.75rem;

  position: relative;

  background-color: white;
  border: 1px solid ${p => p.theme.black4};
  border-right: none;
  border-radius: 0.25rem 0 0 0.25rem;
  box-shadow: ${p => p.theme.shadows.raised};
  color: ${p => p.theme.grey500};

  font-size: 0.875rem;
  line-height: 1.5;

  &::after {
    content: '';
    height: 2.625rem;
    width: 4px;

    position: absolute;
    right: -2px;
    top: 0;

    background-color: white;

    z-index: 20;
  }
`

export const Postfix = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 2.875rem;
  order: 3;
  padding: 0.625rem 0.75rem 0.625rem 0.125rem;

  position: relative;

  background-color: white;
  border: 1px solid ${p => p.theme.black4};
  border-right: none;
  border-radius: 0 0.25rem 0.25rem 0;
  box-shadow: ${p => p.theme.shadows.raised};
  color: ${p => p.theme.grey500};

  font-size: 0.875rem;
  line-height: 1.5;

  z-index: 20;

  &::after {
    content: '';
    height: 2.625rem;
    width: 4px;

    position: absolute;
    left: -4px;
    top: 0;

    background-color: white;
  }
`

const InputGroup = styled.div`
  display: flex;

  ${Input} {
    flex: 1;
    order: 2;

    border-width: 1px 0 1px 0;
    border-radius: 0;

    z-index: 10;

    ${p => p.postfix && css`
      border-radius: 0.25rem 0 0 0.25rem;
    `};

    ${p => !p.postfix && css`
      border-radius: 0 0.25rem 0.25rem 0;
    `};

    &:focus ~ ${Prefix},
    &:focus ~ ${Postfix} {
      box-shadow: ${p => p.theme.shadows.raisedMore};
      color: ${p => p.theme.grey700};
    }
  }
`

InputGroup.defaultProps = {
  postfix: false
}

export default InputGroup
