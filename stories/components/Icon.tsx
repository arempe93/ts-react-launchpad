import React from 'react'

import { storiesOf } from '@storybook/react'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

import Padding from '../Padding'

storiesOf('components/Icon', module)
  .add('default', () => (
    <Padding>
      <Flex gutter={3}>
        <Text size={2}>
          <Icon name='adjust' />
        </Text>
        <Text color='success500' size={2}>
          <Icon name='check' />
        </Text>
        <Text color='warn500' size={2}>
          <Icon name='ad' />
        </Text>
        <Text color='danger500' size={2}>
          <Icon name='exclamation-triangle' />
        </Text>
        <Text color='#0052CC' size={2}>
          <Icon name='atlassian' prefix='fab' />
        </Text>
        <Text color='grey500' size={2}>
          <Icon name='closed-captioning' prefix='far' />
        </Text>
      </Flex>
    </Padding>
  ))
