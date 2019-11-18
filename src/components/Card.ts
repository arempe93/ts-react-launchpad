import styled, { css } from 'styled-components'

const borderedStyles = css`
  border-bottom: 1px solid ${p => p.theme.black4};
`

const Card = styled.div`
  width: 100%;

  background-color: white;
  border: 1px solid ${p => p.theme.black8};
  border-radius: 0.375rem;
  box-shadow: ${p => p.theme.shadows.cardShadow};
`

export const Body = styled.div`
  padding: 1.5rem;

  position: relative;

  background-color: ${p => p.theme[p.bgColor]};

  &:last-child {
    border-radius: 0 0 0.375rem 0.375rem;
  }
`

Body.defaultProps = {
  bgColor: 'white'
}

export const Header = styled.div`
  padding: 1.25rem 1.5rem;

  background-color: white;
  border-radius: 0.375rem 0.375rem 0 0;

  ${p => !p.unbordered && borderedStyles};
`

Header.defaultProps = {
  unbordered: false
}

export default Card
