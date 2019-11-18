import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '@/components/Button'
import Card, { Body, Header } from '@/components/Card'
import FormGroup, { Label } from '@/components/FormGroup'
import Input from '@/components/Input'
import Text from '@/components/Text'

import LoadingScreen from '@/widgets/LoadingScreen'

import Center from '../Center'

storiesOf('widgets/LoadingScreen', module)
  .add('default', () => (
    <LoadingScreen
      isLoading={true}
      prompt='Looking something up'
    />
  ))
  .add('no prompt', () => (
    <LoadingScreen
      isLoading={true}
    />
  ))
  .add('inside other component', () => (
    <Center width={40}>
      <Card>
        <Header>
          <Text color='grey800' size={1.125} weight={700}>
            Something here
          </Text>
        </Header>
        <Body bgColor='grey25'>
          <FormGroup>
            <Label>
              Email
            </Label>
            <Input placeholder='Email' />
          </FormGroup>
          <FormGroup>
            <Label>
              Password
            </Label>
            <Input
              placeholder='Password'
              type='password'
            />
          </FormGroup>
          <Button>
            Login
          </Button>
          <LoadingScreen />
        </Body>
      </Card>
    </Center>
  ))
