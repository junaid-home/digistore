import cls from "@digistore/scss/lib/pages/Search.module.css";

import * as React from "react";

import { Typography, icons } from "@digistore/react-components";

const { SearchDocIcon } = icons;

function QueryDisplay({ query }: { query: string }) {
  return (
    <div className={cls.content_headline}>
      <SearchDocIcon />
      <Typography variant="h3">
        &nbsp;&nbsp;Search Query:
        <span className={cls.content_headline_query}>
          &nbsp;&nbsp;" {query} "
        </span>
      </Typography>
    </div>
  );
}

export default QueryDisplay;
