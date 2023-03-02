import cls from "@digistore/scss/lib/molecules/Payment-card.module.css";

import * as React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

function PaymentCard({
  imgSrc,
  className,
}: {
  imgSrc: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className={cls.container}>
        <LazyLoadImage
          src={imgSrc}
          height={30}
          width={60}
          effect="black-and-white"
          placeholderSrc="/thumbnail.png"
        />
      </div>
    </div>
  );
}

export default PaymentCard;
