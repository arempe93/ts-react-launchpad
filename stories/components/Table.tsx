import React from 'react'

import { storiesOf } from '@storybook/react'

import Card, { Body, Header } from '@/components/Card'
import Table, { Body as TableBody, Cell, Head, Heading, Row } from '@/components/Table'
import Text from '@/components/Text'

import Center from '../Center'

storiesOf('components/Table', module)
  .add('default', () => (
    <Center width={40}>
      <Card>
        <Header>
          <Text color='grey800' lineHeight={1.5} size={1.125} weight={600}>
            Table of Data
          </Text>
        </Header>
        <Table>
          <Head>
            <Heading width='10%'>
              ID
            </Heading>
            <Heading width='40%'>
              Name
            </Heading>
            <Heading width='50%'>
              Email
            </Heading>
          </Head>
          <TableBody>
            <Row>
              <Cell>
                1
              </Cell>
              <Cell>
                Andrew Rempe
              </Cell>
              <Cell>
                arempe@inbox.area2k.com
              </Cell>
            </Row>
            <Row onClick={() => { console.log('asdas') }}>
              <Cell>
                2
              </Cell>
              <Cell>
                Eric Ashman
              </Cell>
              <Cell>
                eashman@inbox.area2k.com
              </Cell>
            </Row>
            <Row>
              <Cell>
                3
              </Cell>
              <Cell>
                Bill Story
              </Cell>
              <Cell>
                bstory@inbox.area2k.com
              </Cell>
            </Row>
          </TableBody>
        </Table>
      </Card>
    </Center>
  ))
