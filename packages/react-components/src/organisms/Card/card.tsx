import cls from '@digistore/scss/lib/organisms/Card.module.css'

import * as React from 'react'

import LinesEllipsis from 'react-lines-ellipsis'
import StarRatingComponent from 'react-star-rating-component'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import CardSkeleton from './card-skelton'

import {Typography} from '../../atoms'

import {CardOptions} from './card-types'

function Card({
  discountedPrice,
  imgSrc,
  price,
  ratings,
  title,
  loading,
  onContentClick,
}: CardOptions) {
  if (loading) return <CardSkeleton />

  return (
    <div className={cls.wrapper}>
      <LazyLoadImage
        src={imgSrc}
        height={166}
        width="100%"
        effect="black-and-white"
        placeholderSrc="/thumbnail.png"
      />
      <div className={cls.content_area} onClick={onContentClick}>
        <div className={cls.text_container}>
          <LinesEllipsis
            text={title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <Typography variant="h3" color="primary">
          {discountedPrice}PKR
        </Typography>
        <Typography
          variant="body3"
          color="greyDark"
          className={cls.line_through}
        >
          {price}PKR
        </Typography>
        <div className="tm-sm">
          <StarRatingComponent
            name={'Ratings'}
            value={ratings}
            starCount={5}
            editing={false}
          />
        </div>
      </div>
    </div>
  )
}

export default Card
