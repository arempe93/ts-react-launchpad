import React from 'react'

import { storiesOf } from '@storybook/react'

import ActionRow from '@/components/ActionRow'
import Icon from '@/components/Icon'
import Label from '@/components/Label'

import Center from '../Center'

storiesOf('components/Label', module)
  .add('default', () => (
    <Center>
      <ActionRow>
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
      </ActionRow>
    </Center>
  ))
  .add('with icon', () => (
    <Center>
      <ActionRow>
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
      </ActionRow>
    </Center>
  ))
  .add('alternate colors', () => (
    <Center>
      <ActionRow>
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
      </ActionRow>
    </Center>
  ))
