import cls from "@digistore/scss/lib/pages/Search.module.css";

import * as React from "react";

import { Card, CardList } from "@digistore/react-components";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";

import Layout from "../components/layout";
import Sidebar from "../containers/search/sidebar";
import QueryDisplay from "../containers/search/query-display";

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
  discountedPrice: 120,
  price: 230,
  ratings: 4.6,
}));

function Search() {
  const [params, setParams] = useQueryParams({
    min: NumberParam,
    max: NumberParam,
    query: StringParam,
  });

  const onPriceFilterSubmit = (min: string, max: string) => {
    setParams({ min, max });
  };

  const { query } = params;

  return (
    <Layout fullBorder color="grey">
      <div className={`container ${cls.wrapper}`}>
        <div className={cls.main}>
          <Sidebar
            categories={categories}
            onPriceFilterSubmit={onPriceFilterSubmit}
          />
          <div className={cls.content}>
            <QueryDisplay query={query} />
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
