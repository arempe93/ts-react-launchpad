import React from 'react'

import { storiesOf } from '@storybook/react'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Label from '@/components/Label'

import Center from '../Center'

storiesOf('components/Label', module)
  .add('default', () => (
    <Center>
      <Flex>
        <Label>
          Primary
        </Label>
        <Label bgColor='success500'>
          Success
        </Label>
        <Label bgColor='warn500' color='grey700'>
          Warning
        </Label>
        <Label bgColor='danger500'>
          Danger
        </Label>
      </Flex>
    </Center>
  ))
  .add('with icon', () => (
    <Center>
      <Flex>
        <Label>
          <Icon name='adjust' />
          Primary
        </Label>
        <Label bgColor='success500'>
          <Icon name='check' />
          Success
        </Label>
        <Label bgColor='warn500' color='grey700'>
          <Icon name='exclamation-triangle' />
          Warning
        </Label>
        <Label bgColor='danger500'>
          <Icon name='radiation-alt' />
          Danger
        </Label>
      </Flex>
    </Center>
  ))
  .add('alternate colors', () => (
    <Center>
      <Flex>
        <Label bgColor='primary200' color='primary800'>
          Primary
        </Label>
        <Label bgColor='success200' color='success800'>
          Success
        </Label>
        <Label bgColor='warn300' color='grey700'>
          Warning
        </Label>
        <Label bgColor='danger200' color='danger800'>
          Danger
        </Label>
      </Flex>
    </Center>
  ))
