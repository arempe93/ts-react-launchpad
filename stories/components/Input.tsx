import React from 'react'

import { storiesOf } from '@storybook/react'

import Input from '@/components/Input'

import Center from '../Center'

storiesOf('components/Input', module)
  .add('default', () => (
    <Center>
      <Input placeholder='Type something...' />
    </Center>
  ))
