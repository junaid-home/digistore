import * as React from 'react'

import Select, {OptionsOrGroups, GroupBase} from 'react-select'

interface PropTypes {
  options: OptionsOrGroups<unknown, GroupBase<unknown>>
  placeholder: string
  className?: string
  defaultValue: any
  onChange: any
}

function DropDown({
  options,
  placeholder,
  defaultValue,
  onChange,
  ...other
}: PropTypes) {
  return (
    <Select
      {...other}
      options={options}
      placeholder={placeholder}
      value={defaultValue}
      onChange={onChange}
      id="select"
      instanceId="select"
      styles={{
        placeholder: base => ({
          ...base,
          fontSize: '1.2rem',
          color: '#A3A3A3',
        }),
        control: base => ({
          ...base,
          minHeight: 'none',
          background: 'transparent',
          border: 'none',
          height: '100%',
          borderRadius: 0,
          borderTop: '1px solid #d9d9d9',
          borderBottom: '1px solid #d9d9d9',
          padding: '0 1rem',
        }),
        indicatorsContainer: base => ({
          ...base,
          '& span': {display: 'none'},
          '& div': {padding: 0},
          '& div svg': {height: 15},
        }),
        valueContainer: base => ({...base, padding: 0}),
        singleValue: base => ({
          ...base,
          fontSize: '1.2rem',
          color: '#A3A3A3',
          outline: 'none',
        }),
        option: base => ({
          ...base,
          fontSize: '1.2rem',
        }),
        menu: base => ({
          ...base,
          width: 'auto',
          overflow: 'hidden',
          borderRadius: 0,
        }),
      }}
    />
  )
}

export default DropDown
