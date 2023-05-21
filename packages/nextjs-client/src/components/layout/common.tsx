import cls from "@digistore/scss/lib/templates/Layout.module.css";

import * as React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import queryString from "querystring";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { Header, Footer, TopBanner } from "@digistore/react-components";

import AuthModel from "../auth-model";
import CartModel from "../cart-model";

import { selectAuthState } from "../../store/auth-slice";
import { selectCategoriesState } from "../../store/categories-slice";
import { selectCartState } from "../../store/cart-slice";
import PaymentModel from "../payment-model";

function Layout({ children, fullBorder, color = "white" }: LayoutOptions) {
  const router = useRouter();
  const alert = useAlert();
  const { isAuthenticated, user } = useSelector(selectAuthState);
  const { categories } = useSelector(selectCategoriesState);
  const { items } = useSelector(selectCartState);

  const [openAuthModel, setOpenAuthModel] = React.useState(false);
  const [openCartModel, setOpenCartModel] = React.useState(false);
  const [openPaymentModel, setOpenPaymentModel] = React.useState(false);

  const handleSearchSubmit = (query: string, category: string) => {
    const searchQuery = queryString.stringify({
      query,
      category,
    });

    router.push(`/search?${searchQuery}`);
  };

  const handleAccountClick = () => {
    if (isAuthenticated) {
      router.push("/profile");
    } else {
      setOpenAuthModel(true);
    }
  };

  const handleCartClick = () => {
    if (items.length) {
      if (isAuthenticated) {
        setOpenCartModel(true);
      } else {
        setOpenAuthModel(true);
      }
    } else {
      alert.info("Cart is Empty, Please Add Item(s) to open!");
    }
  };

  const likesCount = user?.likes?.length || 0;
  const totalPrice = items.reduce(
    (sum, item) => (sum += item.selling_price * item.quantity),
    0
  );

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
        onCartClick={handleCartClick}
        onLogoClick={() => router.push("/")}
        onLikesClick={() => isAuthenticated && router.push("/likes")}
        likesCount={likesCount}
        cartItemsCount={items.length}
        totalPrice={totalPrice}
        user={user}
      />
      <div className={cls.content_container}>
        <div className="container">{children}</div>
      </div>
      <Footer
        language={[{ label: "English", value: "eng" }]}
        color={color === "white" ? "#f3f3f3" : "white"}
      />
      <AuthModel open={openAuthModel} setOpen={setOpenAuthModel} />
      <CartModel
        open={openCartModel}
        onClose={() => setOpenCartModel(false)}
        openPaymentModel={() => setOpenPaymentModel(true)}
      />
      <PaymentModel open={openPaymentModel} setOpen={setOpenPaymentModel} />
    </React.Fragment>
  );
}

interface LayoutOptions {
  children: React.ReactNode;
  fullBorder?: boolean;
  color?: "white" | "grey";
}

export default Layout;
