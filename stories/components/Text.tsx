import React from 'react'

import { storiesOf } from '@storybook/react'

import ActionRow from '@/components/ActionRow'
import Text from '@/components/Text'

import Padding from '../Padding'

storiesOf('components/Text', module)
  .add('default', () => (
    <Padding>
      <ActionRow align='flex-start' direction='column'>
        <Text
          as='h1'
          size={2}
          weight={700}
        >
          Lorem ipsum dolor sit amet
        </Text>
        <Text
          as='h2'
          color='success500'
          size={1.5}
          weight={700}
        >
          Lorem ipsum dolor sit amet
        </Text>
        <Text
          as='h3'
          color='warn500'
          size={1.25}
          weight={500}
        >
          Lorem ipsum dolor sit amet
        </Text>
        <Text
          as='p'
          color='danger500'
        >
          Lorem ipsum dolor sit amet
        </Text>
      </ActionRow>
    </Padding>
  ))
