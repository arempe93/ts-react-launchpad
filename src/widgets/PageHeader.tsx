import React from 'react'
import styled from 'styled-components'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Link from '@/components/Link'
import Text from '@/components/Text'
import UnderlineButton from '@/components/UnderlineButton'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${p => p.padding}rem 0;
`

const Subactions = styled(Flex)`
  margin-left: -0.875rem;
`

const Back = styled.div`
margin-bottom: -0.5rem;
  margin-left: -0.5rem;
`

const PageHeader = ({ actions, back, backTo, padding = 4, title, subactions }) => (
  <Wrapper padding={padding}>
    <Flex align='flex-start' direction='column'>
      {back &&
        <Back>
          <UnderlineButton
            small
            as={Link}
            color='grey500'
            hoverColor='grey700'
            to={backTo}
          >
            <Icon name='arrow-left' />
            {back}
          </UnderlineButton>
        </Back>
      }
      <Text color='grey800' size={2.25} weight={700}>
        {title}
      </Text>
      {subactions &&
        <Subactions gutter={0.5}>
          {subactions}
        </Subactions>
      }
    </Flex>
    <Flex>
      {actions}
    </Flex>
  </Wrapper>
)

export default PageHeader
