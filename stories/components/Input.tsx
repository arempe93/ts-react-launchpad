import React from 'react'

import { storiesOf } from '@storybook/react'

import Input from '@/components/Input'

import Padding from '../Padding'

storiesOf('components/Input', module)
  .add('default', () => (
    <Padding>
      <Input placeholder='Type something...' />
    </Padding>
  ))
