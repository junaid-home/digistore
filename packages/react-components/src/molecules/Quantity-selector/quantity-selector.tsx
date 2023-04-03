import cls from '@digistore/scss/lib/molecules/Quantity-selector.module.css'

import * as React from 'react'

import Typography from '../../atoms/Typography/typography'

function QuantitySelector() {
  return (
    <div className={cls.quantity}>
      <span className={`rm-sm ${cls.quantity_box}`}>
        <Typography variant="body2">-</Typography>
      </span>
      <span className={`rm-sm ${cls.quantity_text}`}>
        <Typography variant="body2">1</Typography>
      </span>
      <span className={cls.quantity_box}>
        <Typography variant="body2">+</Typography>
      </span>
    </div>
  )
}

export default QuantitySelector
