import cls from '@digistore/scss/lib/atoms/Button.module.css'

import * as React from 'react'
import {ButtonOptions} from './button-types'

const Button = React.forwardRef<HTMLButtonElement, ButtonOptions>(
  (props, ref) => {
    const {
      children,
      isActive,
      isDisabled,
      isLoading,
      loadingText,
      spinnerPlacement,
      spinnerSpacing = '.8rem',
      type = 'button',
      color,
      fullWidth,
      className = '',
      onClick,
      ...other
    } = props

    const __buttonStyles = React.useMemo(() => {
      const classNames: string[] = []

      classNames.push(cls.btn)
      fullWidth && classNames.push(cls.btn_full_width)
      isDisabled && classNames.push(cls.btn_disabled)

      classNames.push(className)

      color === 'primary' && classNames.push(cls.btn_primary)
      color === 'secondary' && classNames.push(cls.btn_secondary)
      if (color === 'primary' && isActive)
        classNames.push(cls.btn_primary_active)
      if (color === 'secondary' && isActive)
        classNames.push(cls.btn_secondary_active)

      return classNames.join(' ')
    }, [isActive, isDisabled, color, fullWidth])

    return (
      <button
        ref={ref}
        className={__buttonStyles}
        disabled={isDisabled}
        type={type}
        onClick={onClick}
        {...other}
      >
        {isLoading && spinnerPlacement === 'start' && (
          <span
            className={cls.spinner}
            style={{marginRight: loadingText ? spinnerSpacing : 0}}
          />
        )}
        {isLoading ? loadingText : children}
        {isLoading && spinnerPlacement === 'end' && (
          <span
            className={cls.spinner}
            style={{marginLeft: loadingText ? spinnerSpacing : 0}}
          />
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button
