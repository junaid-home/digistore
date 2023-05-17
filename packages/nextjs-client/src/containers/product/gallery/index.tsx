import cls from "@digistore/scss/lib/pages/Product.module.css";

import * as React from "react";

import Image from "next/image";

import { Carousel } from "react-responsive-carousel";

function ProductGallery({ thumbnails }: { thumbnails: string[] }) {
  const [showCarouselThumbs, setShowThumbs] = React.useState(false);

  React.useEffect(() => {
    setShowThumbs(false);
    if (typeof window !== undefined && window.innerWidth > 1087) {
      setShowThumbs(true);
    }
  }, []);

  return (
    <div className={cls.carousel}>
      <Carousel
        autoPlay
        swipeable
        infiniteLoop
        emulateTouch
        showArrows={!showCarouselThumbs}
        showThumbs={showCarouselThumbs}
        renderThumbs={() =>
          thumbnails.map((thumb) => (
            <Image key={thumb} alt="image" width={80} height={40} src={thumb} />
          ))
        }
      >
        {thumbnails.map((thumb) => (
          <img
            key={thumb}
            alt="Thumbnail"
            height={510}
            width="auto"
            src={thumb}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default ProductGallery;
