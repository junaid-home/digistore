import cls from "@digistore/scss/lib/organisms/Card.module.css";

import * as React from "react";

import LinesEllipsis from "react-lines-ellipsis";
import StarRatingComponent from "react-star-rating-component";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { CardOptions } from "./card-types";
import { Typography } from "../../atoms";

function Card({ discountedPrice, imgSrc, price, ratings, title }: CardOptions) {
  return (
    <div className={cls.wrapper}>
      <LazyLoadImage
        src={imgSrc}
        height={156}
        width="100%"
        effect="black-and-white"
        placeholderSrc="/thumbnail.png"
      />
      <LinesEllipsis
        text={title}
        maxLine="2"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
      <Typography variant="h3" color="primary" className="tm-sm">
        {discountedPrice}
      </Typography>
      <Typography variant="body3" color="greyDark" className={cls.line_through}>
        {price}
      </Typography>
      <div className="tm-sm">
        <StarRatingComponent
          name={"Ratings"}
          value={ratings}
          starCount={5}
          editing={false}
        />
      </div>
    </div>
  );
}

export default Card;
