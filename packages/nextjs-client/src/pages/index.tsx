import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { CardList, Card, Typography } from "@digistore/react-components";
import InfiniteScroll from "react-infinite-scroll-component";

import Layout from "../components/layout";
import LoadingCards from "../components/loading-cards";

import Showcase from "../containers/home/showcase";
import HighLights from "../containers/home/hight-lights";
import CountDown from "../containers/home/countdown";
import { highLights, links } from "../containers/home/data";

import client from "../graphql/client";
import { GET_ALL_CATEGORIES } from "../graphql/category";

import { wrapper } from "../store";
import { setCategories } from "../store/categories-slice";
import { GET_HOME_DATA, GET_MORE_PRODUCTS } from "../graphql/product";

import useLoadItems from "../hooks/use-load-items";

function Home({ categories, data }: HomePageProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { items, setItems, hasNextPage, loadMore } = useLoadItems(
    GET_MORE_PRODUCTS,
    { key: "products" }
  );

  React.useEffect(() => {
    dispatch(setCategories({ categories }));

    setItems(data.recommended);
  }, []);

  return (
    <Layout>
      <Showcase products={data.top} categories={categories} links={links} />
      <HighLights highLights={highLights} />
      <div className="bm-xl">
        <CardList
          title="Flash Sale"
          endComponent={<CountDown date={Date.now() + 10000 * 500} />}
        >
          {data.sale.map((prod) => (
            <Card
              key={prod.id}
              title={prod.name}
              discountedPrice={prod.selling_price}
              price={prod.market_price}
              ratings={prod.ratings}
              imgSrc={prod.thumbnail}
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
          {data.deals.map((prod) => (
            <Card
              key={prod.id}
              title={prod.name}
              discountedPrice={prod.selling_price}
              price={prod.market_price}
              ratings={prod.ratings}
              imgSrc={prod.thumbnail}
              onContentClick={() => router.push(`/product/${prod.slug}`)}
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
          &nbsp;
        </CardList>
        <InfiniteScroll
          dataLength={items.length}
          next={() =>
            loadMore({
              filters: { promotion: "", limit: 10, skip: items.length },
            })
          }
          hasMore={hasNextPage}
          loader={<LoadingCards />}
          className={cls.grid}
          endMessage={
            <div>
              <p style={{ textAlign: "center" }}>
                <b>No more products to show!</b>
              </p>
            </div>
          }
        >
          {items.map((prod) => (
            <Card
              key={prod.id}
              title={prod.name}
              discountedPrice={prod.selling_price}
              price={prod.market_price}
              ratings={prod.ratings}
              imgSrc={prod.thumbnail}
              onContentClick={() => router.push(`/product/${prod.slug}`)}
            />
          ))}
        </InfiniteScroll>
      </div>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (): Promise<any> => {
    const { data: categoryResults } = await client.query({
      query: GET_ALL_CATEGORIES,
    });
    const { data: homeResults } = await client.query({
      query: GET_HOME_DATA,
      variables: {
        filter1: {
          promotion: "top",
          limit: 3,
        },
        filter2: {
          promotion: "deals",
          limit: 10,
        },
        filter3: {
          promotion: "sale",
          limit: 10,
        },
        filter4: {
          promotion: "",
          limit: 10,
        },
      },
    });

    return {
      props: {
        categories: categoryResults.categories.data || [],
        data: {
          top: homeResults.top.data || [],
          deals: homeResults.deals.data || [],
          sale: homeResults.sale.data || [],
          recommended: homeResults.recommended.data || [],
        },
      },
    };
  }
);

export interface ProductType {
  id: string;
  name: string;
  slug: string;
  summary: string;
  market_price: number;
  selling_price: number;
  thumbnail: string;
  ratings: number;
}

interface HomePageProps {
  categories: { id: string; name: string; slug: string }[];
  data: {
    top: ProductType[];
    deals: ProductType[];
    recommended: ProductType[];
    sale: ProductType[];
  };
}

export default Home;
