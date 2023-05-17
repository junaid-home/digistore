import cls from "@digistore/scss/lib/pages/Search.module.css";

import * as React from "react";

import { useRouter } from "next/router";

import queryString from "querystring";
import { Card, CardList } from "@digistore/react-components";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";

import Layout from "../components/layout";
import Sidebar from "../containers/search/sidebar";
import QueryDisplay from "../containers/search/query-display";

import InfiniteScroll from "react-infinite-scroll-component";
import { SEARCH_PRODUCT } from "../graphql/product";
import useLoadItems from "../hooks/use-load-items";
import LoadingCards from "../components/loading-cards";

import { wrapper } from "../store";

import { GET_ALL_CATEGORIES } from "../graphql/category";
import client from "../graphql/client";

function Search({ categories }: SearchProps) {
  const router = useRouter();

  const { items, setItems, hasNextPage, loadMore } = useLoadItems(
    SEARCH_PRODUCT,
    {
      key: "search",
    }
  );

  const [params, setParams] = useQueryParams({
    min: NumberParam,
    max: NumberParam,
    query: StringParam,
    category: StringParam,
  });

  const onPriceFilterSubmit = (min: string, max: string) => {
    setParams({ min, max });
  };

  const { query, category, min, max } = params;

  const searchOpts = {
    query: query || "",
    category: category || "",
    min_price: min || 0,
    max_price: max || Infinity,
    limit: 10,
    skip: items.length,
  };

  React.useEffect(() => {
    loadMore({
      filters: searchOpts,
    });
  }, [params]);

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
              <InfiniteScroll
                dataLength={items.length}
                next={() =>
                  loadMore({
                    filters: searchOpts,
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
                {items &&
                  items.map((prod) => (
                    <Card
                      key={prod.id}
                      title={prod.name}
                      discountedPrice={prod.selling_price}
                      price={prod.market_price}
                      ratings={prod.ratings}
                      imgSrc={prod.thumbnail}
                      onContentClick={() =>
                        router.push(`/product/${prod.slug}`)
                      }
                    />
                  ))}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (): Promise<any> => {
    const { data: categoryResults } = await client.query({
      query: GET_ALL_CATEGORIES,
    });

    return {
      props: {
        categories: categoryResults.categories.data || [],
      },
    };
  }
);

interface SearchProps {
  categories: { id: string; name: string; slug: string }[];
}

export default Search;
