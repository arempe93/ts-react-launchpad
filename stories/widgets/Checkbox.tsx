import React from 'react'

import { storiesOf } from '@storybook/react'

import Checkbox from '@/widgets/Checkbox'

import Padding from '../Padding'

storiesOf('widgets/Checkbox', module)
  .add('default', () => (
    <Padding>
      <Checkbox>
        Remember me
      </Checkbox>
    </Padding>
  ))
