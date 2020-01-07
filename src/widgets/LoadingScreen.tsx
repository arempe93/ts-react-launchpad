import { IconName } from '@fortawesome/fontawesome-svg-core'
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

interface Props {
  color: string
  icon: IconName
  iconColor: string
  prompt: string
}

const LoadingScreen = ({ color, icon, iconColor, prompt, ...rest }: Props) => (
  <Wrapper {...rest}>
    <Inner>
      <Text color={iconColor} size={4}>
        <Icon spin name={icon} />
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
  icon: 'circle-notch',
  iconColor: 'grey800'
}

export default LoadingScreen
