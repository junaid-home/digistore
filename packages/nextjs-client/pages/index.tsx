import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import Links from "../containers/home/links";
import Showcase from "../containers/home/showcase";
import HighLight from "../containers/home/hight-light";

import {
  Header,
  TopBanner,
  CategoryListing,
  CardList,
} from "@digistore/react-components";

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

export default function Home() {
  const handleSearchSubmit = (query: string, category: string) => {
    console.log(query, category);
  };

  return (
    <div>
      <TopBanner headline="Up to 70% off the entire store!" />
      <Header
        categories={categories}
        onSearchQuerySubmit={handleSearchSubmit}
      />
      <div className="container center">
        <div className={cls.sidebar}>
          <CategoryListing categories={categories} />
        </div>
        <div className={cls.main_area}>
          <Links />
          <Showcase />
        </div>
      </div>
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
      <CardList title="Flash Sale" endComponent={<h5>COunter</h5>}>
        Hello WOrld
      </CardList>
    </div>
  );
}
