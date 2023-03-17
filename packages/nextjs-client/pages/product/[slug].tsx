import * as React from "react";

import Image from "next/image";

import SanitizedHtml from "react-sanitized-html";
import StarRatingComponent from "react-star-rating-component";
import { Carousel } from "react-responsive-carousel";
import { Button, Typography } from "@digistore/react-components";

import Layout from "../../components/layout";

function ProductDetails() {
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

  return (
    <Layout>
      <div className="container">
        <div style={{ display: "flex" }}>
          <div className="tm-lg" style={{ flex: 1 }}>
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              emulateTouch
              swipeable
              dynamicHeight
              renderThumbs={() =>
                product.thumbnails.map((thumb) => (
                  <Image alt="image" width={80} height={40} src={thumb} />
                ))
              }
            >
              {product.thumbnails.map((thumb) => (
                <div>
                  <img alt="Thumbnail" src={thumb} />
                </div>
              ))}
            </Carousel>
          </div>
          <div
            className="tm-lg"
            style={{
              flex: 1,

              height: "510px",
              paddingLeft: "2.5rem",
              paddingBottom: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h3">{product.title}</Typography>
              <div className="tm-sm">
                <StarRatingComponent
                  name={"Ratings"}
                  value={product.ratings}
                  starCount={5}
                  editing={false}
                />
              </div>
              <div className="tm-xl">
                <Typography variant="body2">
                  Size: <span style={{ color: "grey" }}>M</span>
                </Typography>
                {product.sizes.map((size) => (
                  <span
                    style={{
                      background: "white",
                      border: "2px solid #dc2626",
                      display: "inline-block",
                      padding: "5px",
                      width: "35px",
                      textAlign: "center",
                    }}
                    className="rm-sm tm-sm"
                  >
                    <Typography variant="body3">{size}</Typography>
                  </span>
                ))}
              </div>
              <div className="tm-xl">
                <Typography variant="body2">
                  Color: <span style={{ color: "grey" }}>Grey</span>
                </Typography>
                {product.colors.map((color) => (
                  <span
                    style={{
                      background: color,
                      display: "inline-block",
                      padding: "5px",
                      width: "30px",
                      textAlign: "center",
                    }}
                    className="rm-sm tm-sm"
                  >
                    <Typography variant="body3">&nbsp;</Typography>
                  </span>
                ))}
              </div>
              <div className="tm-xl">
                <Typography variant="body2">Quantity:</Typography>
                <div>
                  <span
                    style={{
                      background: "white",
                      border: "2px solid grey",
                      display: "inline-block",
                      padding: "5px",
                      width: "35px",
                      textAlign: "center",
                    }}
                    className="rm-sm tm-sm"
                  >
                    <Typography variant="body2">-</Typography>
                  </span>
                  <span
                    style={{
                      background: "white",
                      display: "inline-block",
                      padding: "5px",
                      textAlign: "center",
                    }}
                    className="rm-sm tm-sm"
                  >
                    <Typography variant="body2">1</Typography>
                  </span>
                  <span
                    style={{
                      background: "white",
                      border: "2px solid grey",
                      display: "inline-block",
                      padding: "5px",
                      width: "35px",
                      textAlign: "center",
                    }}
                    className="rm-sm tm-sm"
                  >
                    <Typography variant="body2">+</Typography>
                  </span>
                </div>
              </div>
            </div>
            <div className="tm-lg" style={{ display: "flex" }}>
              <Button color="primary" fullWidth>
                Buy Now
              </Button>
              <Button className="lm-lg" color="secondary" fullWidth>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
        <div style={{ background: "#f3f3f3", padding: "2rem" }}>
          <SanitizedHtml html={product.desc} />
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
