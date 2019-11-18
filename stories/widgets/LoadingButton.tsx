import React from 'react'

import { storiesOf } from '@storybook/react'

import LoadingButton from '@/widgets/LoadingButton'

import Padding from '../Padding'

storiesOf('widgets/LoadingButton', module)
  .add('default', () => (
    <Padding>
      <LoadingButton>
        Save
      </LoadingButton>
    </Padding>
  ))
  .add('isLoading', () => (
    <Padding>
      <LoadingButton isLoading={true}>
        Save
      </LoadingButton>
    </Padding>
  ))
