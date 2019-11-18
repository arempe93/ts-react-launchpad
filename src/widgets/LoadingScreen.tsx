import React from 'react'
import styled from 'styled-components'

import Icon from '@/components/Icon'
import Text from '@/components/Text'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  right: 0;

  background-color: ${p => p.theme[p.bgColor]};
`

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > ${Text} + ${Text} {
    margin-top: 1.5rem;
  }
`

const LoadingScreen = ({ color, iconColor, name, prompt, ...rest }) => (
  <Wrapper {...rest}>
    <Inner>
      <Text color={iconColor} size={4}>
        <Icon spin name={name} />
      </Text>
      {prompt &&
        <Text color={color}>
          {prompt}
        </Text>
      }
    </Inner>
  </Wrapper>
)

LoadingScreen.defaultProps = {
  bgColor: 'transparent',
  color: 'grey700',
  iconColor: 'grey800',
  name: 'circle-notch'
}

export default LoadingScreen
