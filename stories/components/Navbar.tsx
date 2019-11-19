import React from 'react'

import { storiesOf } from '@storybook/react'

import Footer from '@/components/Footer'
import Navbar, { Group } from '@/components/Navbar'
import Page from '@/components/Page'
import Sidebar from '@/components/Sidebar'
import SidebarLayout from '@/components/SidebarLayout'
import Text from '@/components/Text'

storiesOf('components/Navbar', module)
  .add('default', () => (
    <Page>
      <Sidebar />
      <SidebarLayout>
        <Navbar>
          <Group>
            <Text color='white' weight={900}>
              LANCER
            </Text>
          </Group>
          <Group>
            <Text color='white'>
              Link
            </Text>
            <Text color='white'>
              Link
            </Text>
            <Text color='white'>
              Account
            </Text>
          </Group>
        </Navbar>
        Something here
      </SidebarLayout>
      <Footer>
        Something here
      </Footer>
    </Page>
  ))
