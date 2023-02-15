import * as React from "react";
import { Typography } from "../../atoms";

import { CardListOptions } from "./card-list-types";

function CardList({ children, title, endComponent }: CardListOptions) {
  return (
    <div className="container tm-xl">
      <div className="center ">
        <Typography variant="h3">{title}</Typography>
        {endComponent}
      </div>
      <div className="tm-lg grid">{children}</div>
    </div>
  );
}

export default CardList;
