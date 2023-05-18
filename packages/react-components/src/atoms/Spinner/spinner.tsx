import cls from '@digistore/scss/lib/atoms/Spinner.module.css'

import * as React from 'react'

function Spinner() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.spinner}></div>
    </div>
  )
}

export default Spinner
