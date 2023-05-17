import cls from "@digistore/scss/lib/pages/Product.module.css";

import * as React from "react";

import SanitizedHtml from "react-sanitized-html";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import {
  Button,
  QuantityCounter,
  Typography,
  Selector,
} from "@digistore/react-components";

import Layout from "../../components/layout";
import ProductGallery from "../../containers/product/gallery";
import IconsView from "../../containers/product/icons-view";

import { wrapper } from "../../store";
import { selectAuthState, setUser } from "../../store/auth-slice";

import client from "../../graphql/client";
import { GET_PRODUCT_WITH_SLUG } from "../../graphql/product";
import { ADD_PRODUCT_TO_USER_LIKE } from "../../graphql/auth";

function ProductDetails({ data }: { data: any }) {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, user, token } = useSelector(selectAuthState);

  const [addLike] = useMutation(ADD_PRODUCT_TO_USER_LIKE);

  const [isLiked, setIsLiked] = React.useState(false);
  const [size, setSize] = React.useState("large");
  const [color, setColor] = React.useState("blue");
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    data?.sizes?.length && setSize(data.sizes[0].name);
    data?.colors?.length && setColor(data.colors[0].name);

    if (isAuthenticated) {
      user?.likes.map((prod) => {
        if (prod.id === data.id) {
          setIsLiked(true);
        }
      });
    }
  }, [user?.likes, isAuthenticated]);

  const thumbnails = data?.gallery?.map((img: any) => img.source);

  const oldLikes = user?.likes || [];

  return (
    <Layout color="grey" fullBorder>
      <div className="container">
        <div className={cls.showcase}>
          <ProductGallery thumbnails={thumbnails} />
          <div className={cls.details}>
            <div>
              <Typography variant="h3">{data.name}</Typography>
              <IconsView
                isLiked={isLiked}
                onLikeClick={async () => {
                  if (isAuthenticated && !isLiked) {
                    const { data: results } = await addLike({
                      variables: { productId: data.id },
                      context: {
                        headers: {
                          authorization: token,
                        },
                      },
                    });

                    if (results.addLike.status === "success") {
                      alert.success("Product is Added to Favorites");

                      const newLike = {
                        id: data.id,
                        slug: data.slug,
                        name: data.name,
                        ratings: data.ratings,
                        thumbnail: data.gallery[0].source,
                        summary: data.summary,
                        market_price: data.market_price,
                        selling_price: data.selling_price,
                      };

                      dispatch(
                        setUser({
                          ...user,
                          likes: [...oldLikes, newLike],
                        })
                      );
                    }
                  }
                }}
                ratings={data.ratings}
              />
              <div className="tm-xl">
                <Selector value={size} onChange={setSize} title="Size">
                  {data.sizes &&
                    data.sizes.map((size: any) => (
                      <Selector.Option key={size.id} value={size.name}>
                        {size.name_brief}
                      </Selector.Option>
                    ))}
                </Selector>
              </div>
              <div className="tm-xl">
                <Selector value={color} onChange={setColor} title="Color">
                  {data.colors &&
                    data.colors.map((color: any) => (
                      <Selector.Option
                        key={color.id}
                        type="color"
                        value={color.name}
                      >
                        &nbsp;
                      </Selector.Option>
                    ))}
                </Selector>
              </div>
              <div className="tm-xl">
                <Typography variant="body2">Quantity:</Typography>
                <div className="tm-sm">
                  <QuantityCounter count={quantity} onChange={setQuantity} />
                </div>
              </div>
            </div>
            <div className={cls.cto_buttons}>
              <Button color="primary" fullWidth>
                Buy Now
              </Button>
              <Button className="lm-lg" color="secondary" fullWidth>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
        <div className={cls.description}>
          <SanitizedHtml html={data.desc} />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }): Promise<any> => {
      const slug = req.url?.replace("/product/", "") || null;

      const { data } = await client.query({
        query: GET_PRODUCT_WITH_SLUG,
        variables: { slug },
      });

      return {
        props: {
          data: data.product.data || {},
        },
      };
    }
);

export default ProductDetails;
