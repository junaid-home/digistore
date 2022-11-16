import * as React from 'react'
import css from '@digistore/scss/lib/atoms/Button.module.css'

interface ButtonProps {
    label: string
}

function Button({label}: ButtonProps): JSX.Element {
  return (
    <button className={css.btn} >{label}</button>
  )
}

export default Button