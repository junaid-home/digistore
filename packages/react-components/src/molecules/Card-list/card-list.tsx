import cls from '@digistore/scss/lib/molecules/Card-list.module.css'

import * as React from 'react'
import {Typography} from '../../atoms'

import {CardListOptions} from './card-list-types'

function CardList({children, title, endComponent}: CardListOptions) {
  return (
    <div className="container">
      {(title || endComponent) && (
        <div className="center tm-xl">
          <span className={cls.text_container}>
            {title && <Typography variant="h3">{title}</Typography>}
            {endComponent && endComponent}
          </span>
        </div>
      )}
      <div className={title && 'tm-lg'}>
        <div className={cls.grid}>{children}</div>
      </div>
    </div>
  )
}

export default CardList
