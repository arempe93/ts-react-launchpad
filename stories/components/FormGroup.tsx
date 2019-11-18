import React from 'react'

import { storiesOf } from '@storybook/react'

import FormGroup, { Label } from '@/components/FormGroup'
import Input from '@/components/Input'

import Center from '../Center'

storiesOf('components/FormGroup', module)
  .add('default', () => (
    <Center>
      <FormGroup>
        <Label>
          Email
        </Label>
        <Input placeholder='Email' />
      </FormGroup>
      <FormGroup>
        <Label>
          Password
        </Label>
        <Input
          placeholder='Password'
          type='password'
        />
      </FormGroup>
    </Center>
  ))
