import React from 'react'

import Button from '@/components/Button'
import Icon from '@/components/Icon'

const LoadingButton = ({ children, icon = 'circle-notch', isLoading, ...rest }) => (
  <Button disabled={isLoading} {...rest}>
    {isLoading &&
      <Icon spin name={icon} />
    }
    {children}
  </Button>
)

export default LoadingButton
