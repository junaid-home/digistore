import cls from '@digistore/scss/lib/organisms/Card.module.css'

import * as React from 'react'

import Skeleton from 'react-loading-skeleton'

function CardSkeleton() {
  return (
    <div className={cls.wrapper}>
      <Skeleton height="15.7rem" baseColor="#d9d9d9" />
      <div className="tm-sm">
        <Skeleton height="3.5rem" baseColor="#d9d9d9" />
      </div>
      <div className="tm-sm">
        <Skeleton height="6.67rem" baseColor="#d9d9d9" />
      </div>
    </div>
  )
}

export default CardSkeleton
