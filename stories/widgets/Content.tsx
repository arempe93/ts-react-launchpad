import React from 'react'

import { storiesOf } from '@storybook/react'

import Content from '@/widgets/Content'

storiesOf('widgets/Content', module)
  .add('default', () => (
    <Content>
      Wrapped content
    </Content>
  ))
  .add('full', () => (
    <Content full>
      Wrapped content
    </Content>
  ))
