import * as React from "react";

import { DocumentNode } from "@apollo/client";

import client from "../graphql/client";

const useLoadItems = (QUERY: DocumentNode, options: any) => {
  const [items, setItems] = React.useState<any[]>([]);
  const [hasNextPage, setHasNextPage] = React.useState(true);

  const loadMore = (variables: any) => {
    return new Promise(async (resolve) => {
      const { data } = await client.query({
        query: QUERY,
        variables,
      });

      const ids = new Set(items.map((p) => p.id));
      const merged = [
        ...items,
        ...data[options.key].data.filter((p: any) => !ids.has(p.id)),
      ];

      resolve(setItems(merged));
      resolve(setHasNextPage(data[options.key].hasNextPage));
    });
  };

  return {
    items,
    setItems,
    hasNextPage,
    loadMore,
  };
};

export default useLoadItems;
