import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'

import ActionRow from '@/components/ActionRow'
import Anchor from '@/components/Anchor'
import BackgroundHeader from '@/components/BackgroundHeader'
import Button from '@/components/Button'
import Card, { Body, Header } from '@/components/Card'
import FormGroup, { Label } from '@/components/FormGroup'
import Input from '@/components/Input'
import Text from '@/components/Text'

import Checkbox from '@/widgets/Checkbox'

import Content from '@/widgets/Content'

const HeadingText = styled.div`
  margin-bottom: 4rem;
`

const LoginBody = styled(Body)`
  padding: 3.5rem 2.5rem;
`

storiesOf('components/BackgroundHeader', module)
  .add('default', () => (
    <>
      <BackgroundHeader>
        <Content>
          <HeadingText>
            <ActionRow full justify='center'>
              <Text color='white' size={2} weight={700}>
                Go ahead, log in
              </Text>
            </ActionRow>
          </HeadingText>
        </Content>
      </BackgroundHeader>
      <Content width={28}>
        <Card>
          <LoginBody bgColor='grey25'>
            <FormGroup>
              <ActionRow justify='center'>
                <Text color='grey600' size={0.875}>
                  Sign in to your account
                </Text>
              </ActionRow>
            </FormGroup>
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
            <FormGroup>
              <Checkbox>
                Remember me
              </Checkbox>
            </FormGroup>
            <FormGroup>
              <Button block>
                Sign in
              </Button>
            </FormGroup>
            <ActionRow justify='center'>
              <Anchor
                href='https://google.com'
                size={0.875}
                target='_blank'
              >
                Create a new account
              </Anchor>
            </ActionRow>
          </LoginBody>
        </Card>
      </Content>
    </>
  ))
