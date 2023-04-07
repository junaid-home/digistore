import * as React from "react";

import { SidebarWithLinksLayout } from "../components/layout";

import { Card, CardList } from "@digistore/react-components";

const products = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  title: "New Infinite zero x Pro 2021, 128GB, 8GB, 108...",
  imgSrc: "/assets/product.jpg",
  discountedPrice: 120,
  price: 230,
  ratings: 4.6,
}));

function Likes() {
  return (
    <SidebarWithLinksLayout>
      <CardList>
        {products.map((prod) => (
          <Card
            key={prod.id}
            title={prod.title}
            discountedPrice={prod.discountedPrice}
            price={prod.price}
            ratings={prod.ratings}
            imgSrc={prod.imgSrc}
          />
        ))}
      </CardList>
    </SidebarWithLinksLayout>
  );
}

export default Likes;