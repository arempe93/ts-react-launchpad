import React from 'react'

import { storiesOf } from '@storybook/react'

import ActionRow from '@/components/ActionRow'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

import Padding from '../Padding'

storiesOf('components/Button', module)
  .add('default', () => (
    <Padding>
      <ActionRow>
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
      </ActionRow>
    </Padding>
  ))
  .add('disabled', () => (
    <Padding>
      <ActionRow>
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
      </ActionRow>
    </Padding>
  ))
  .add('small', () => (
    <Padding>
      <ActionRow>
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
      </ActionRow>
    </Padding>
  ))
  .add('block', () => (
    <Padding>
      <ActionRow direction='column'>
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
      </ActionRow>
    </Padding>
  ))
  .add('with icon', () => (
    <Padding>
      <ActionRow>
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
      </ActionRow>
    </Padding>
  ))
