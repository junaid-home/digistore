import cls from '@digistore/scss/lib/atoms/Spinner.module.css'

import * as React from 'react'

function Spinner({overlay}: {overlay: boolean}) {
  if (overlay)
    return (
      <div className={cls.center}>
        <div className={cls.spinner}></div>
      </div>
    )

  return (
    <div className={cls.wrapper}>
      <div className={cls.spinner}></div>
    </div>
  )
}

export default Spinner
