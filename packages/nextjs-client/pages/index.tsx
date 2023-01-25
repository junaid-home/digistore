import * as React from "react";

import { Header, TopBanner } from "@digistore/react-components";

const categories = [
  { value: "all", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "fashion", label: "Fashion" },
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
      Hello World!
    </div>
  );
}
