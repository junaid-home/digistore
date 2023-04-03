import cls from "@digistore/scss/lib/pages/Search.module.css";

import * as React from "react";

import Image from "next/image";

import Layout from "../components/layout";

import {
  Typography,
  Card,
  CardList,
  Button,
  Input,
} from "@digistore/react-components";

import { icons } from "@digistore/react-components";

const categories = [
  { id: "1", value: "electronics", label: "Electronics" },
  { id: "2", value: "fashion", label: "Fashion Mobile Accessories" },
  { id: "2", value: "fashion", label: "Bluetooth Headsets" },
  { id: "2", value: "fashion", label: "Wireless Earbuds" },
  { id: "2", value: "fashion", label: "Entertainment" },
];

const products = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: "New Infinite zero x Pro 2021, 128GB, 8GB, 108...",
  imgSrc:
    "https://www.lovethispic.com/uploaded_images/351095-Landscape-Of-Nature.jpg",
  discountedPrice: "120PKR",
  price: "230PKR",
  ratings: 4.6,
}));

function Search() {
  const { FilterIcon, SearchDocIcon } = icons;

  return (
    <Layout fullBorder color="grey">
      <div className={`container ${cls.wrapper}`}>
        <div className={cls.main}>
          <div className={cls.filter_headline}>
            <FilterIcon />
            <Typography variant="h3">&nbsp;&nbsp;Filter Results</Typography>
          </div>
          <div className={cls.sidebar}>
            <div className={cls.sidebar_categories}>
              <Typography variant="h3">Category</Typography>
              <div className={cls.sidebar_categories_list}>
                {categories.map((cat) => (
                  <span className={cls.sidebar_categories_list_item}>
                    <Typography variant="body2">{cat.label}</Typography>
                  </span>
                ))}
              </div>
            </div>
            <div className={cls.sidebar_price}>
              <span className={cls.sidebar_price_title}>
                <Typography variant="h3">Price</Typography>
              </span>
              <form className={cls.sidebar_price_form}>
                <span style={{ flex: 1 }} className="rm-md">
                  <Input fullWidth placeholder="Min Price" />
                </span>
                <span>-</span>
                <span style={{ flex: 1 }} className="lm-md">
                  <Input fullWidth placeholder="Max Price" />
                </span>
                <div className="lm-lg">
                  <Button className={cls.sidebar_button} color="primary">
                    ▷
                  </Button>
                </div>
              </form>
            </div>
            <div className={cls.sidebar_qr}>
              <Image src="/qr.png" alt="QR Code" width={230} height={230} />
            </div>
          </div>
          <div className={cls.content}>
            <div className={cls.content_headline}>
              <SearchDocIcon />
              <Typography variant="h3">
                &nbsp;&nbsp;Search Query:
                <span className={cls.content_headline_query}>
                  &nbsp;&nbsp;Infinix Zero X Pro
                </span>
              </Typography>
            </div>
            <div className={cls.content_card_list}>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Search;
