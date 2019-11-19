import React from 'react'

import { storiesOf } from '@storybook/react'

import Icon from '@/components/Icon'
import Sidebar, { Group, Item, Title } from '@/components/Sidebar'
import Text from '@/components/Text'

import Padding from '../Padding'

storiesOf('components/Sidebar', module)
  .add('default', () => (
    <Padding>
      <Sidebar>
        <Group>
          <Title>
            Workspace
          </Title>
          <Item>
            <Icon name='columns' />
            Dashboard
          </Item>
          <Item>
            <Icon name='award' />
            Sales
          </Item>
          <Item active>
            <Icon name='images' />
            Image Gallery
          </Item>
          <Item>
            <Icon name='briefcase' />
            Products
          </Item>
          <Item>
            <Icon name='pen-nib' />
            Logos
          </Item>
        </Group>
        <Group>
          <Title>
            Resources
          </Title>
          <Item>
            <Icon name='scroll' />
            Guide to Lancer
          </Item>
          <Item>
            <Icon name='play-circle' />
            Video Tutorials
          </Item>
          <Item>
            <Icon name='headset' />
            Help Center
          </Item>
        </Group>
      </Sidebar>
    </Padding>
  ))
