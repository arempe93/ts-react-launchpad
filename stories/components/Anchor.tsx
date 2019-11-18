import React from 'react'

import { storiesOf } from '@storybook/react'

import Anchor from '@/components/Anchor'

import Padding from '../Padding'

storiesOf('components/Anchor', module)
  .add('default', () => (
    <Padding>
      <Anchor
        href='https://google.com'
        target='_blank'
      >
        Link to google.com
      </Anchor>
    </Padding>
  ))
