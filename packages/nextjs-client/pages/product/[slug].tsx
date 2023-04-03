import cls from "@digistore/scss/lib/pages/Product.module.css";

import * as React from "react";

import Image from "next/image";

import SanitizedHtml from "react-sanitized-html";
import StarRatingComponent from "react-star-rating-component";
import { Carousel } from "react-responsive-carousel";
import {
  Button,
  QuantitySelector,
  Typography,
} from "@digistore/react-components";

import Layout from "../../components/layout";

import { icons } from "@digistore/react-components";

const product = {
  title:
    "New Infinite zero x Pro 2021, 128GB, 8GB | 5000Mah Battery, Buy our Latest Mobile Phone",
  thumbnails: [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
  ],
  ratings: 4.8,
  colors: ["red", "blue", "orange"],
  sizes: ["S", "M"],
  desc: `
<h2>The importance of learning how to edit a blog post</h2>
<p>Self editing is one of the most essential skills for bloggers to learn. You might want to hire an editor for your blog eventually, but in the early days, it’s a significant expense with no guaranteed return on investment. But you still need to be publishing quality, polished articles if you want your blog to look like a professional publication.</p>
<p>Until you’re seeing major conversions from your blog and/or managing a team of writers, self editing is the most efficient and cost-effective way to ensure that quality and polish. That said, you will need to pick up a few skills – and some tools – to do it right.</p>
`,
};

const { LikeIcon } = icons;

function ProductDetails() {
  const [showCarouselThumbs, setShowThumbs] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    setShowThumbs(false);
    if (typeof window !== undefined && window.innerWidth > 1087) {
      setShowThumbs(true);
    }
  }, []);

  return (
    <Layout color="grey" fullBorder>
      <div className="container">
        <div className={cls.showcase}>
          <div className={cls.carousel}>
            <Carousel
              autoPlay
              swipeable
              infiniteLoop
              emulateTouch
              showArrows={!showCarouselThumbs}
              showThumbs={showCarouselThumbs}
              renderThumbs={() =>
                product.thumbnails.map((thumb) => (
                  <Image alt="image" width={80} height={40} src={thumb} />
                ))
              }
            >
              {product.thumbnails.map((thumb) => (
                <img alt="Thumbnail" src={thumb} />
              ))}
            </Carousel>
          </div>
          <div className={cls.details}>
            <div>
              <Typography variant="h3">{product.title}</Typography>
              <div className={cls.icons}>
                <StarRatingComponent
                  name={"Ratings"}
                  value={product.ratings}
                  starCount={5}
                  editing={false}
                />
                <div
                  className={cls.icons_like}
                  onClick={() => setIsLiked((prev) => !prev)}
                >
                  <LikeIcon filled={isLiked} />
                </div>
              </div>
              <div className="tm-xl">
                <Typography variant="body2">
                  Size: <span className={cls.grey}>M</span>
                </Typography>
                {product.sizes.map((size) => (
                  <span
                    style={{ border: "2px solid #dc2626" }}
                    className={cls.size_box}
                  >
                    <Typography variant="body3">{size}</Typography>
                  </span>
                ))}
              </div>
              <div className="tm-xl">
                <Typography variant="body2">
                  Color: <span className={cls.grey}>Grey</span>
                </Typography>
                {product.colors.map((color) => (
                  <span
                    style={{
                      background: color,
                      border: "2px solid #dc2626",
                    }}
                    className={cls.size_box}
                  >
                    <Typography variant="body3">&nbsp;</Typography>
                  </span>
                ))}
              </div>
              <div className="tm-xl">
                <Typography variant="body2">Quantity:</Typography>
                <div className="tm-sm">
                  <QuantitySelector />
                </div>
              </div>
            </div>
            <div className={cls.cto_buttons}>
              <Button color="primary" fullWidth>
                Buy Now
              </Button>
              <Button className="lm-lg" color="secondary" fullWidth>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
        <div className={cls.description}>
          <SanitizedHtml html={product.desc} />
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
