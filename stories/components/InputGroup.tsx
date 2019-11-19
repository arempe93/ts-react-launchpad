import React from 'react'

import { storiesOf } from '@storybook/react'

import Icon from '@/components/Icon'
import Input from '@/components/Input'
import InputGroup, { Postfix, Prefix } from '@/components/InputGroup'

import Center from '../Center'

storiesOf('components/InputGroup', module)
  .add('prefix', () => (
    <Center>
      <InputGroup>
        <Input placeholder='Type something...' />
        <Prefix>
          <Icon name='check' />
        </Prefix>
      </InputGroup>
    </Center>
  ))
  .add('postfix', () => (
    <Center>
      <InputGroup postfix>
        <Input placeholder='Type something...' />
        <Postfix>
          <Icon name='check' />
        </Postfix>
      </InputGroup>
    </Center>
  ))
