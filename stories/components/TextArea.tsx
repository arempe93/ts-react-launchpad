import React from 'react'

import { storiesOf } from '@storybook/react'

import TextArea from '@/components/TextArea'

import Padding from '../Padding'

storiesOf('components/TextArea', module)
  .add('default', () => (
    <Padding>
      <TextArea placeholder='Write something long...' />
    </Padding>
  ))
