import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import Links from "../containers/home/links";
import Showcase from "../containers/home/showcase";
import HighLight from "../containers/home/hight-light";
import CountDown from "../containers/home/countdown";

import {
  CategoryListing,
  CardList,
  Card,
  Typography,
} from "@digistore/react-components";

import Layout from "../components/layout";

const categories = [
  { id: "1", value: "electronics", label: "Electronics" },
  { id: "2", value: "fashion", label: "Fashion" },
];

const highLights = [
  {
    id: "1",
    title: "Free Delivery",
    desc: "Free Shipping on all order(s)",
    imgSrc: "/shipping.png",
  },
  {
    id: "2",
    title: "Online support 24/7",
    desc: "Support online 24 hours a day",
    imgSrc: "/customer-care.png",
  },
  {
    id: "3",
    title: "Money Return",
    desc: "Back guarantee under 7 days",
    imgSrc: "/wallet.png",
  },
  {
    id: "4",
    title: "Member Discount",
    desc: "On every order over 50,000 PKR",
    imgSrc: "/discount.png",
  },
];

const products = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  title: "New Infinite zero x Pro 2021, 128GB, 8GB, 108...",
  imgSrc:
    "https://www.lovethispic.com/uploaded_images/351095-Landscape-Of-Nature.jpg",
  discountedPrice: "120PKR",
  price: "230PKR",
  ratings: 4.6,
}));

export default function Home() {
  return (
    <Layout>
      <main className={cls.main}>
        <div className={cls.sidebar}>
          <CategoryListing categories={categories} />
        </div>
        <div className={cls.main_area}>
          <Links />
          <Showcase />
        </div>
      </main>
      <div className="container">
        <div className={cls.highlights}>
          {highLights.map((highLight) => (
            <HighLight
              key={highLight.id}
              title={highLight.title}
              desc={highLight.desc}
              imgSrc={highLight.imgSrc}
            />
          ))}
        </div>
      </div>
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
            />
          ))}
        </CardList>
        <CardList
          title="Just for You"
          endComponent={
            <Typography color="greyDark" variant="body2">
              Top Recommendations for you
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
            />
          ))}
        </CardList>
      </div>
    </Layout>
  );
}
