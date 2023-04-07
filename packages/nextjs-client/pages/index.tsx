import * as React from "react";

import { useRouter } from "next/router";

import { CardList, Card, Typography } from "@digistore/react-components";
import InfiniteScroll from "react-infinite-scroll-component";

import Layout from "../components/layout";
import Showcase from "../containers/home/showcase";
import HighLights from "../containers/home/hight-lights";
import CountDown from "../containers/home/countdown";

import { highLights, links } from "../containers/home/data";

const categories = [
  { id: "1", value: "electronics", label: "Electronics" },
  { id: "2", value: "fashion", label: "Fashion" },
];

const products = Array.from({ length: 5 }, (_, index) => ({
  id: JSON.stringify(
    Math.random() * 100 + ((Math.random() * 100) / Math.random()) * 100
  ),
  title: "New Macbook Pro 2022",
  summary: `MacBook Pro 14” and 16” laptops feature incredible performance with
  the M1 Pro or M1 Max chip, amazing battery life, and a Liquid Retina
  XDR display.`,
  slug: JSON.stringify(index),
  imgSrc: "/assets/product.jpg",
  discountedPrice: 120,
  price: 230,
  ratings: 4.6,
}));

const LoadingGrid = () => {
  return (
    <div className="tm-lg">
      <CardList>
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
      </CardList>
    </div>
  );
};

function Home() {
  const useLoadItems = () => {
    const [items, setItems] = React.useState(products);

    const loadMore = () => {
      return new Promise((resolve) => {
        return setTimeout(() => {
          return resolve(setItems((i) => [...i, ...products]));
        }, 3000);
      });
    };

    return {
      items,
      hasNextPage: true,
      loadMore,
    };
  };

  const router = useRouter();
  const { items, hasNextPage, loadMore } = useLoadItems();

  return (
    <Layout>
      <Showcase products={products} categories={categories} links={links} />
      <HighLights highLights={highLights} />
      <div className="bm-xl">
        <CardList
          title="Flash Sale"
          endComponent={<CountDown date={Date.now() + 10000 * 500} />}
        >
          {products.map((prod) => (
            <Card
              key={prod.id}
              title={prod.title}
              discountedPrice={prod.discountedPrice}
              price={prod.price}
              ratings={prod.ratings}
              imgSrc={prod.imgSrc}
              onContentClick={() => router.push(`/product/${prod.slug}`)}
            />
          ))}
        </CardList>
        <CardList
          title="Most Popular"
          endComponent={
            <Typography color="greyDark" variant="body2">
              Most Popular on our Platform
            </Typography>
          }
        >
          {products.map((prod) => (
            <Card
              key={prod.id}
              title={prod.title}
              discountedPrice={prod.discountedPrice}
              price={prod.price}
              ratings={prod.ratings}
              imgSrc={prod.imgSrc}
              onContentClick={() => router.push(`/product/${prod.slug}`)}
            />
          ))}
          {products.map((prod) => (
            <Card
              key={prod.id}
              title={prod.title}
              discountedPrice={prod.discountedPrice}
              price={prod.price}
              ratings={prod.ratings}
              imgSrc={prod.imgSrc}
              onContentClick={() => router.push(`/product/${prod.slug}`)}
            />
          ))}
        </CardList>
        <InfiniteScroll
          dataLength={items.length}
          next={loadMore}
          hasMore={hasNextPage}
          loader={<LoadingGrid />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <CardList
            title="Just for You"
            endComponent={
              <Typography color="greyDark" variant="body2">
                Top Recommendations for you
              </Typography>
            }
          >
            {items.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                discountedPrice={item.discountedPrice}
                price={item.price}
                ratings={item.ratings}
                imgSrc={item.imgSrc}
                onContentClick={() => router.push(`/product/${item.slug}`)}
              />
            ))}
          </CardList>
        </InfiniteScroll>
      </div>
    </Layout>
  );
}

export default Home;
