import React from 'react'

import { storiesOf } from '@storybook/react'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Snackbar from '@/components/Snackbar'

import Padding from '../Padding'

storiesOf('components/Snackbar', module)
  .add('default', () => (
    <Padding>
      <Flex align='flex-start' direction='column' gutter={2}>
        <Snackbar>
          Important application message
        </Snackbar>
        <Snackbar bgColor='success500'>
          Great job, the thing you did worked
        </Snackbar>
        <Snackbar bgColor='warn500' color='grey900'>
          Something else you should know
        </Snackbar>
        <Snackbar bgColor='danger500'>
          Uh oh, you messed this one up good
        </Snackbar>
      </Flex>
    </Padding>
  ))
  .add('with icon', () => (
    <Padding>
      <Flex align='flex-start' direction='column' gutter={2}>
        <Snackbar>
          <Icon name='adjust' />
          Important application message
        </Snackbar>
        <Snackbar bgColor='success500'>
          <Icon name='check' />
          Great job, the thing you did worked
        </Snackbar>
        <Snackbar bgColor='warn500' color='grey900'>
          <Icon name='exclamation-triangle' />
          Something else you should know
        </Snackbar>
        <Snackbar bgColor='danger500'>
          <Icon name='radiation-alt' />
          Uh oh, you messed this one up good
        </Snackbar>
      </Flex>
    </Padding>
  ))
  .add('alternate colors', () => (
    <Padding>
      <Flex align='flex-start' direction='column' gutter={2}>
        <Snackbar bgColor='primary200' color='primary900'>
          Important application message
        </Snackbar>
        <Snackbar bgColor='success200' color='success900'>
          Great job, the thing you did worked
        </Snackbar>
        <Snackbar bgColor='warn200' color='grey900'>
          Something else you should know
        </Snackbar>
        <Snackbar bgColor='danger200' color='danger900'>
          Uh oh, you messed this one up good
        </Snackbar>
      </Flex>
    </Padding>
  ))
