import cls from "@digistore/scss/lib/pages/Product.module.css";

import * as React from "react";

import SanitizedHtml from "react-sanitized-html";
import {
  Button,
  QuantityCounter,
  Typography,
  Selector,
} from "@digistore/react-components";

import Layout from "../../components/layout";
import ProductGallery from "../../containers/product/gallery";
import IconsView from "../../containers/product/icons-view";

const product = {
  title:
    "New Infinite zero x Pro 2021, 128GB, 8GB | 5000Mah Battery, Buy our Latest Mobile Phone",
  thumbnails: [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
  ],
  ratings: 4.8,
  colors: ["red", "blue", "orange"],
  sizes: ["S", "M"],
  desc: `
<h2>The importance of learning how to edit a blog post</h2>
<p>Self editing is one of the most essential skills for bloggers to learn. You might want to hire an editor for your blog eventually, but in the early days, it’s a significant expense with no guaranteed return on investment. But you still need to be publishing quality, polished articles if you want your blog to look like a professional publication.</p>
<p>Until you’re seeing major conversions from your blog and/or managing a team of writers, self editing is the most efficient and cost-effective way to ensure that quality and polish. That said, you will need to pick up a few skills – and some tools – to do it right.</p>
`,
};

function ProductDetails() {
  const [isLiked, setIsLiked] = React.useState(false);
  const [size, setSize] = React.useState("large");
  const [color, setColor] = React.useState("blue");
  const [quantity, setQuantity] = React.useState(1);

  return (
    <Layout color="grey" fullBorder>
      <div className="container">
        <div className={cls.showcase}>
          <ProductGallery thumbnails={product.thumbnails} />
          <div className={cls.details}>
            <div>
              <Typography variant="h3">{product.title}</Typography>
              <IconsView
                isLiked={isLiked}
                onLikeClick={() => setIsLiked((p) => !p)}
                ratings={product.ratings}
              />
              <div className="tm-xl">
                <Selector value={size} onChange={setSize} title="Size">
                  <Selector.Option value="large">L</Selector.Option>
                  <Selector.Option value="small">S</Selector.Option>
                </Selector>
              </div>
              <div className="tm-xl">
                <Selector value={color} onChange={setColor} title="Color">
                  <Selector.Option type="color" value="orange">
                    &nbsp;
                  </Selector.Option>
                  <Selector.Option type="color" value="blue">
                    &nbsp;
                  </Selector.Option>
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
          <SanitizedHtml html={product.desc} />
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
