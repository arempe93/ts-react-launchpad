import React from 'react'

import { storiesOf } from '@storybook/react'

import Select from '@/components/Select'

import Padding from '../Padding'

storiesOf('components/Select', module)
  .add('default', () => (
    <Padding>
      <Select>
        <option disabled selected>Select an option...</option>
        <option value={1}>Option 1</option>
        <option value={1}>Option 2</option>
        <option value={1}>Option 3</option>
      </Select>
    </Padding>
  ))
