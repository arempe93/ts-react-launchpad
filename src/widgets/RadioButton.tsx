import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Circle = styled.div`
  height: 1.25rem;
  margin-right: 0.75rem;
  width: 1.25rem;

  position: relative;

  background-color: white;
  border-radius: 100%;
  box-shadow: ${p => p.theme.shadows.raised};

  &::after {
    content: "";
    display: block;
    height: 0.5rem;
    width: 0.5rem;

    left: 6px;
    position: absolute;
    top: 6px;

    background-color: white;
    border-radius: 100%;
  }

  input:checked + & {
    background-color: ${p => p.theme.primary500};
    border-color: ${p => p.theme.primary500};
  }
`

const disabledStyles = css`
  color: ${p => p.theme.black32};

  ${Circle} {
    background-color: ${p => p.theme.black4};

    &::after {
      border-color: transparent;
    }
  }
`

const Wrapper = styled.label`
  align-items: center;
  display: flex;

  position: relative;

  cursor: pointer;

  font-size: 0.875rem;
  line-height: 1.5;

  > input {
    height: 0;
    width: 0;
    user-select: none;

    position: absolute;

    opacity: 0;
  }

  ${p => p.disabled && disabledStyles};
`

class RadioButton extends Component {
  private handleChange = ({ target: { checked, name } }) => (
    this.props.onChange({ target: { name, value: checked } })
  )

  public render() {
    const { children, disabled, name, value } = this.props

    return (
      <Wrapper disabled={disabled} htmlFor={name}>
        <input
          id={name}
          disabled={disabled}
          name={name}
          checked={value}
          type='radio'
          onChange={this.handleChange}
        />
        <Circle />
        {children}
      </Wrapper>
    )
  }
}

export default RadioButton
