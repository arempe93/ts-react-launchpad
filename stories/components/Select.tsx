import React from 'react'

import { storiesOf } from '@storybook/react'

import Select from '@/components/Select'

import Center from '../Center'

storiesOf('components/Select', module)
  .add('default', () => (
    <Center>
      <Select>
        <option disabled selected>Select an option...</option>
        <option value={1}>Option 1</option>
        <option value={1}>Option 2</option>
        <option value={1}>Option 3</option>
      </Select>
    </Center>
  ))
