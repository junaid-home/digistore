import cls from '@digistore/scss/lib/molecules/Selector.module.css'

import * as React from 'react'

import {SelectContext} from './selector'

function Option({children, value = '', type = 'default'}: OptionProps) {
  const context = React.useContext(SelectContext)
  if (!context) {
    throw new Error(
      `Select.Option component must be used inside Select component.`,
    )
  }

  const styles = type === 'color' ? {background: value} : {}

  const {onChange} = context

  return (
    <span
      onClick={() => onChange && onChange(value)}
      style={{
        border: '2px solid #ddd',
        borderColor: context.value === value ? '#dc2626' : '#ddd',
        ...styles,
      }}
      className={cls.box}
    >
      {children}
    </span>
  )
}

interface OptionProps {
  children: React.ReactNode
  value: string
  type?: 'default' | 'color'
}

export default Option
