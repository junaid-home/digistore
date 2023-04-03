import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import { useRouter } from "next/router";

import { Carousel } from "react-responsive-carousel";

import PrimaryCard from "./primary-card";
import SecondaryCard from "./secondary-card";

const products = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  slug: "abc123",
  title: "New Infinite zero x Pro 2021, 128GB, 8GB, 108...",
  imgSrc:
    "https://www.lovethispic.com/uploaded_images/351095-Landscape-Of-Nature.jpg",
  discountedPrice: "120PKR",
  price: "230PKR",
  ratings: 4.6,
}));

function Showcase() {
  const router = useRouter();

  return (
    <main>
      <div className={cls.showcase}>
        <PrimaryCard />
        <div>
          <SecondaryCard color="#D8E8FA" />
          <SecondaryCard color="#DFE3E4" />
        </div>
      </div>
      <div className={cls.carousel}>
        <Carousel
          autoPlay
          infiniteLoop
          emulateTouch
          swipeable
          showThumbs={false}
          onClickItem={(index) => {
            router.push(`/product/${products[index].slug}`);
          }}
        >
          {products.map((p) => (
            <div key={p.id}>
              <img alt="Thumbnail" src={p.imgSrc} />
            </div>
          ))}
        </Carousel>
      </div>
    </main>
  );
}

export default Showcase;
