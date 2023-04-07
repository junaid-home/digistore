import * as React from 'react'

import Typography from '../../atoms/Typography/typography'

export const SelectContext = React.createContext<ContextOpts>({value: ''})

import Option from './option'

function Selector({children, title, value, onChange}: SelectorProps) {
  return (
    <SelectContext.Provider value={{value, onChange}}>
      <Typography variant="body2">
        {title}: <span style={{color: 'grey'}}>{value}</span>
      </Typography>
      {children}
    </SelectContext.Provider>
  )
}

interface ContextOpts {
  value: string
  onChange?: React.Dispatch<React.SetStateAction<string>>
}

interface SelectorProps {
  title: string
  onChange?: React.Dispatch<React.SetStateAction<string>>
  value: string
  children: React.ReactNode
}

Selector.Option = Option

export default Selector
