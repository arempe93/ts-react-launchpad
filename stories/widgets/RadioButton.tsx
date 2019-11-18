import React from 'react'

import { storiesOf } from '@storybook/react'

import RadioButton from '@/widgets/RadioButton'

import Center from '../Center'

storiesOf('widgets/RadioButton', module)
  .add('default', () => (
    <Center>
      <RadioButton>
        Remember me
      </RadioButton>
    </Center>
  ))
