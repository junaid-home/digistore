import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import { useRouter } from "next/router";

import { Carousel } from "react-responsive-carousel";

import PrimaryCard from "./primary-card";
import SecondaryCard from "./secondary-card";
import { ProductType } from "../types";

function ContentArea({ products }: { products: ProductType[] }) {
  const router = useRouter();

  if (products.length < 3) {
    throw new Error("There should be at least 3 products!.");
  }

  return (
    <React.Fragment>
      <div className={cls.showcase}>
        <PrimaryCard product={products[0]} />
        <div>
          <SecondaryCard product={products[1]} color="#D8E8FA" />
          <SecondaryCard product={products[2]} color="#DFE3E4" />
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
          {products.map((product) => (
            <div key={product.id}>
              <img alt="Thumbnail" src={product.imgSrc} />
            </div>
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
}

export default ContentArea;
