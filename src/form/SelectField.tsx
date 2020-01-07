import { useField } from 'hooked-form'
import React from 'react'

import Select from '@/widgets/Select'

const SelectField = ({ children, fieldId, ...rest }) => {
  const [{ onChange, onBlur, onFocus }, { value }] = useField(fieldId)

  return (
    <Select
      {...rest}
      value={value}
      onBlur={onBlur}
      onChange={(e: React.FormEvent<HTMLSelectElement>) => onChange(e.currentTarget.value)}
      onFocus={onFocus}
    >
      {children}
    </Select>
  )
}

export default SelectField
