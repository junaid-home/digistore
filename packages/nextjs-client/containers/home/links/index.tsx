import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";
import Link from "next/link";

import { Typography } from "@digistore/react-components";

function Links() {
  return (
    <div className={cls.tabs}>
      <Link legacyBehavior href="#">
        <a>
          <Typography variant="body2">Home</Typography>
        </a>
      </Link>
      <Link legacyBehavior href="#">
        <a>
          <Typography variant="body2">Today’s Deals</Typography>
        </a>
      </Link>
      <Link legacyBehavior href="#">
        <a>
          <Typography variant="body2">Trending Products</Typography>
        </a>
      </Link>
      <Link legacyBehavior href="#">
        <a>
          <Typography variant="body2">Blog</Typography>
        </a>
      </Link>
      <Link legacyBehavior href="#">
        <a>
          <Typography variant="body2" color="secondary">
            Special Offers
          </Typography>
        </a>
      </Link>
    </div>
  );
}

export default Links;
