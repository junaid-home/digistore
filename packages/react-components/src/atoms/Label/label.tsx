import cls from '@digistore/scss/lib/atoms/Label.module.css'

import * as React from 'react'

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  return <label ref={ref} className={cls.label} {...props} />
})

Label.displayName = 'Label'
export default Label
