import React from 'react'

import { storiesOf } from '@storybook/react'

import FormGroup, { Label } from '@/components/FormGroup'
import Input from '@/components/Input'

import Padding from '../Padding'

storiesOf('components/FormGroup', module)
  .add('default', () => (
    <Padding>
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
        <Input placeholder='Password' />
      </FormGroup>
    </Padding>
  ))
