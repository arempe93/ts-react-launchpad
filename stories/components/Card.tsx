import React from 'react'

import { storiesOf } from '@storybook/react'

import Card, { Body, Header } from '@/components/Card'
import Text from '@/components/Text'

import Padding from '../Padding'

storiesOf('components/Card', module)
  .add('default', () => (
    <Padding>
      <Card>
        <Header>
          <Text color='grey800' lineHeight={1.5} size={1.125} weight={600}>
            Card title
          </Text>
        </Header>
        <Body>
          Card body
        </Body>
      </Card>
    </Padding>
  ))
  .add('bgColor', () => (
    <Padding>
      <Card>
        <Header>
          <Text color='grey800' lineHeight={1.5} size={1.125} weight={600}>
            Grey background
          </Text>
        </Header>
        <Body bgColor='grey50'>
          Card body
        </Body>
      </Card>
    </Padding>
  ))
