import { QueryResult } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'

import Alert from '@/components/Alert'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

type RenderFunction = (data: any) => React.ReactNode

interface Props {
  children: RenderFunction
  result: QueryResult<any, Record<string, any>>
  whenError?: React.ReactNode
  whenLoading?: React.ReactNode
}

const Wrapper = styled(Flex)`
  padding: 2rem 0;
`

const Error = () => (
  <Wrapper justify='center'>
    <Alert bgColor='danger600'>
      <Icon name='exclamation-triangle' />
      Error while loading query
    </Alert>
  </Wrapper>
)

const Loading = () => (
  <Wrapper justify='center'>
    <Icon spin name='circle-notch' />
    <Text>
      Loading...
    </Text>
  </Wrapper>
)

const QueryLoader = ({ children, result, whenError, whenLoading }: Props) => {
  if (result.error) {
    return whenError === undefined
      ? <Error />
      : whenError
  }

  if (result.loading) {
    return whenLoading === undefined
      ? <Loading />
      : whenLoading
  }

  return children(result.data)
}

export default QueryLoader
