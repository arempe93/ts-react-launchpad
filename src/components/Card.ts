import styled, { css } from 'styled-components'

const borderedStyles = css`
  border-bottom: 1px solid ${p => p.theme.grey200};
`

const Card = styled.div`
  width: 100%;

  background-color: white;
  border: 1px solid ${p => p.theme.grey200};
  border-radius: 0.375rem;
  box-shadow: ${p => p.theme.shadows.cardShadow};
`

export const Body = styled.div`
  padding: 1.5rem;

  position: relative;

  background-color: ${p => p.theme[p.bgColor]};

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }

  & + & {
    border-top: 1px solid ${p => p.theme.grey100};
  }
`

Body.defaultProps = {
  bgColor: 'white'
}

export const Header = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0.5rem;

  background-color: white;

  &:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  ${Body} + & {
    border-top: 1px solid ${p => p.theme.grey200};
  }

  ${p => p.bordered && borderedStyles};
`

Header.defaultProps = {
  bordered: false
}

export default Card
