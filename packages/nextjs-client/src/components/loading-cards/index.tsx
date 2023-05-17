import * as React from "react";

import { Card } from "@digistore/react-components";

const products = Array.from({ length: 5 }, (_, index) => ({
  id: JSON.stringify(index + 1),
  title: "",
  summary: ``,
  slug: "#",
  imgSrc: "/assets/product.jpg",
  discountedPrice: 0,
  price: 0,
  ratings: 0,
}));

const LoadingCards = () => {
  return (
    <React.Fragment>
      {products.map((prod) => (
        <Card
          loading
          key={prod.id}
          title={prod.title}
          discountedPrice={prod.discountedPrice}
          price={prod.price}
          ratings={prod.ratings}
          imgSrc={prod.imgSrc}
        />
      ))}
    </React.Fragment>
  );
};

export default LoadingCards;
