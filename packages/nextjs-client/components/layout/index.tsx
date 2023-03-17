import * as React from "react";

import { Header, Footer, TopBanner } from "@digistore/react-components";

const categories = [
  { id: "1", value: "electronics", label: "Electronics" },
  { id: "2", value: "fashion", label: "Fashion" },
];

function Layout({
  children,
  headerSidebarBorder,
}: {
  children: React.ReactNode;
  headerSidebarBorder?: boolean;
}) {
  const handleSearchSubmit = (query: string, category: string) => {
    console.log(query, category);
  };

  return (
    <React.Fragment>
      <TopBanner headline="Up to 70% off the entire store!" />
      <Header
        categories={categories}
        onSearchQuerySubmit={handleSearchSubmit}
        sidebarBottomMargin={headerSidebarBorder}
      />
      {children}
      <Footer language={categories} />
    </React.Fragment>
  );
}

export default Layout;
