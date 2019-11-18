import React from 'react'

import { storiesOf } from '@storybook/react'

import Card, { Body, Header } from '@/components/Card'
import Text from '@/components/Text'

import Center from '../Center'

storiesOf('components/Card', module)
  .add('default', () => (
    <Center width={40}>
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
    </Center>
  ))
  .add('bgColor', () => (
    <Center width={40}>
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
    </Center>
  ))
