import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import Sidebar from "./sidebar";

import Links from "./links";
import ContentArea from "./content-area";
import { CategoryType, LinkType, ProductType } from "../types";

function Showcase({
  products,
  categories,
  links,
}: {
  products: ProductType[];
  categories: CategoryType[];
  links: LinkType[];
}) {
  return (
    <section className={cls.main}>
      <aside className={cls.sidebar}>
        <Sidebar categories={categories} />
      </aside>
      <main className={cls.main_area}>
        <Links links={links} />
        <ContentArea products={products} />
      </main>
    </section>
  );
}

export default Showcase;
