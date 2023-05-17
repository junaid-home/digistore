import * as React from "react";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Card, CardList, Typography } from "@digistore/react-components";

import { SidebarWithLinksLayout } from "../components/layout";
import { selectAuthState } from "../store/auth-slice";

function Likes() {
  const router = useRouter();

  const { isAuthenticated, user } = useSelector(selectAuthState);
  if (!isAuthenticated) {
    router.replace("/");
    return;
  }

  return (
    <SidebarWithLinksLayout>
      <CardList>
        {user?.likes.length ? (
          user.likes.map((prod: any) => (
            <Card
              key={prod.id}
              title={prod.name}
              discountedPrice={prod.market_price}
              price={prod.selling_price}
              ratings={prod.ratings}
              imgSrc={prod.thumbnail}
              onContentClick={() => router.push(`/product/${prod.slug}`)}
            />
          ))
        ) : (
          <div className="center">
            <Typography variant="h3">No Products are Liked!</Typography>
          </div>
        )}
      </CardList>
    </SidebarWithLinksLayout>
  );
}

export default Likes;
