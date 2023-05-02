import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { Typography } from "@digistore/react-components";

function HighLightItem({
  title,
  desc,
  imgSrc,
}: {
  title: string;
  desc: string;
  imgSrc: string;
}) {
  return (
    <div className={cls.highlight}>
      <div className={cls.highlight_img}>
        <LazyLoadImage
          src={imgSrc}
          alt="Product Image"
          width="auto"
          height="auto"
          effect="black-and-white"
          placeholderSrc="/thumbnail.png"
        />
      </div>
      <div>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body3" color="greyDark">
          {desc}
        </Typography>
      </div>
    </div>
  );
}

export default HighLightItem;
