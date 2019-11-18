import React from 'react'

import { storiesOf } from '@storybook/react'

import Checkbox from '@/widgets/Checkbox'

import Center from '../Center'

storiesOf('widgets/Checkbox', module)
  .add('default', () => (
    <Center>
      <Checkbox>
        Remember me
      </Checkbox>
    </Center>
  ))
