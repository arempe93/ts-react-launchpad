import { useField } from 'hooked-form'
import React from 'react'

import Input from '@/components/Input'

interface Props {
  fieldId: string
}

const TextField = ({ fieldId, ...rest }: Props) => {
  const [{ onChange, onBlur, onFocus }, { value }] = useField(fieldId)

  return (
    <Input
      {...rest}
      value={value}
      onBlur={onBlur}
      onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
      onFocus={onFocus}
    />
  )
}

export default TextField
