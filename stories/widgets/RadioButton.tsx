import React from 'react'

import { storiesOf } from '@storybook/react'

import RadioButton from '@/widgets/RadioButton'

import Padding from '../Padding'

storiesOf('widgets/RadioButton', module)
  .add('default', () => (
    <Padding>
      <RadioButton>
        Remember me
      </RadioButton>
    </Padding>
  ))
