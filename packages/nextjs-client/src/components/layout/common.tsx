import cls from "@digistore/scss/lib/templates/Layout.module.css";

import * as React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { Header, Footer, TopBanner } from "@digistore/react-components";
import { useQueryParams, StringParam } from "use-query-params";

import AuthModel from "../auth-model";
import CartModel from "../cart-model";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../store/auth-slice";

const categories = [
  { id: "1", value: "electronics", label: "Electronics" },
  { id: "2", value: "fashion", label: "Fashion" },
];

function Layout({ children, fullBorder, color = "white" }: LayoutOptions) {
  const router = useRouter();
  const { isAuthenticated } = useSelector(selectAuthState);

  const [params, setParams] = useQueryParams({
    query: StringParam,
    category: StringParam,
  });
  const [openAuthModel, setOpenAuthModel] = React.useState(false);
  const [openCartModel, setOpenCartModel] = React.useState(false);

  const handleSearchSubmit = (query: string, category: string) => {
    setParams({ query, category });
  };

  const handleAccountClick = () => {
    if (isAuthenticated) {
      router.push("/profile");
    } else {
      setOpenAuthModel(true);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <style>
          {color === "white"
            ? "body {background: white}"
            : "body {background: #f3f3f3}"}
        </style>
      </Head>
      <TopBanner headline="Up to 70% off the entire store!" />
      <Header
        categories={categories}
        onSearchQuerySubmit={handleSearchSubmit}
        fullBorder={fullBorder}
        onAccountClick={handleAccountClick}
        onCartClick={() => setOpenCartModel((prev) => !prev)}
        onLogoClick={() => router.push("/")}
        onLikesClick={() => router.push("/likes")}
      />
      <div className={cls.content_container}>
        <div className="container">{children}</div>
      </div>
      <Footer
        language={categories}
        color={color === "white" ? "#f3f3f3" : "white"}
      />
      <AuthModel open={openAuthModel} setOpen={setOpenAuthModel} />
      <CartModel open={openCartModel} onClose={() => setOpenCartModel(false)} />
    </React.Fragment>
  );
}

interface LayoutOptions {
  children: React.ReactNode;
  fullBorder?: boolean;
  color?: "white" | "grey";
}

export default Layout;
