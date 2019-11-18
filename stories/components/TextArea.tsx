import React from 'react'

import { storiesOf } from '@storybook/react'

import TextArea from '@/components/TextArea'

import Center from '../Center'

storiesOf('components/TextArea', module)
  .add('default', () => (
    <Center>
      <TextArea
        placeholder='Write something long...'
      />
    </Center>
  ))
