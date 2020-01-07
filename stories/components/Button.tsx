import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '@/components/Button'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'

import Center from '../Center'
import Padding from '../Padding'

storiesOf('components/Button', module)
  .add('default', () => (
    <Padding>
      <Flex>
        <Button>
          Testing
        </Button>
        <Button
          activeColor='success600'
          bgColor='success500'
        >
          Same
        </Button>
        <Button
          activeColor='danger600'
          bgColor='danger500'
        >
          Long texted button
        </Button>
        <Button
          activeColor='warn600'
          bgColor='warn500'
          color='grey800'
        >
          Something
        </Button>
      </Flex>
    </Padding>
  ))
  .add('disabled', () => (
    <Padding>
      <Flex>
        <Button disabled>
          Testing
        </Button>
        <Button
          disabled
          disabledColor='success300'
        >
          Same
        </Button>
        <Button
          disabled
          disabledColor='danger300'
        >
          Long texted button
        </Button>
        <Button
          disabled
          disabledColor='warn300'
          color='grey500'
        >
          Something
        </Button>
      </Flex>
    </Padding>
  ))
  .add('small', () => (
    <Padding>
      <Flex>
        <Button small>
          Testing
        </Button>
        <Button
          small
          activeColor='success600'
          bgColor='success500'
        >
          Same
        </Button>
        <Button
          small
          activeColor='danger600'
          bgColor='danger500'
        >
          Long texted button
        </Button>
        <Button
          small
          activeColor='warn600'
          bgColor='warn500'
          color='grey800'
        >
          Something
        </Button>
      </Flex>
    </Padding>
  ))
  .add('block', () => (
    <Center>
      <Flex direction='column'>
        <Button block>
          Testing
        </Button>
        <Button
          block
          activeColor='success600'
          bgColor='success500'
        >
          Same
        </Button>
        <Button
          block
          activeColor='danger600'
          bgColor='danger500'
        >
          Long texted button
        </Button>
        <Button
          block
          activeColor='warn600'
          bgColor='warn500'
          color='grey800'
        >
          Something
        </Button>
      </Flex>
    </Center>
  ))
  .add('with icon', () => (
    <Padding>
      <Flex>
        <Button>
          <Icon name='arrow-alt-circle-down' />
          Testing
        </Button>
        <Button
          activeColor='success600'
          bgColor='success500'
        >
          <Icon name='check' />
          Same
        </Button>
        <Button
          activeColor='danger600'
          bgColor='danger500'
        >
          <Icon name='radiation-alt' />
          Long texted button
        </Button>
        <Button
          activeColor='warn600'
          bgColor='warn500'
          color='grey800'
        >
          <Icon name='exclamation-triangle' />
          Something
        </Button>
      </Flex>
    </Padding>
  ))
