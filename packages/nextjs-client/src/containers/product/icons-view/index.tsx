import cls from "@digistore/scss/lib/pages/Product.module.css";

import * as React from "react";

import StarRatingComponent from "react-star-rating-component";

import { icons } from "@digistore/react-components";

function IconsView({ ratings, isLiked, onLikeClick }: IconsViewProps) {
  const { LikeIcon } = icons;

  return (
    <React.Fragment>
      <div className={cls.icons}>
        <StarRatingComponent
          name={"Ratings"}
          value={ratings}
          starCount={5}
          editing={false}
        />
        <div className={cls.icons_like} onClick={onLikeClick}>
          <LikeIcon filled={isLiked} />
        </div>
      </div>
    </React.Fragment>
  );
}

interface IconsViewProps {
  ratings: number;
  isLiked: boolean;
  onLikeClick?: () => void;
}

export default IconsView;
