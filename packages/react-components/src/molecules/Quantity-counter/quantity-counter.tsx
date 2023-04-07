import cls from '@digistore/scss/lib/molecules/Quantity-counter.module.css'

import * as React from 'react'

import Typography from '../../atoms/Typography/typography'

function QuantityCounter({count, onChange}: QuantityCounterProps) {
  return (
    <div className={cls.quantity}>
      <span
        onClick={() => count > 1 && onChange(count - 1)}
        className={`${cls.quantity_box}`}
      >
        <Typography variant="body2">-</Typography>
      </span>
      <span className={`${cls.quantity_text}`}>
        <Typography variant="body2">{count}</Typography>
      </span>
      <span onClick={() => onChange(count + 1)} className={cls.quantity_box}>
        <Typography variant="body2">+</Typography>
      </span>
    </div>
  )
}

interface QuantityCounterProps {
  count: number
  onChange: React.Dispatch<React.SetStateAction<number>>
}

export default QuantityCounter
