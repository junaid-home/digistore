import { gql } from "@apollo/client";

export const GET_HOME_DATA = gql`
  query (
    $filter1: Filter!
    $filter2: Filter!
    $filter3: Filter!
    $filter4: Filter!
  ) {
    top: products(filters: $filter1) {
      data {
        id
        name
        slug
        summary
        market_price
        selling_price
        thumbnail
        ratings
      }
    }
    deals: products(filters: $filter2) {
      data {
        id
        name
        slug
        market_price
        selling_price
        thumbnail
        ratings
      }
    }
    sale: products(filters: $filter3) {
      data {
        id
        name
        slug
        market_price
        selling_price
        thumbnail
        ratings
      }
    }
    recommended: products(filters: $filter4) {
      data {
        id
        name
        slug
        market_price
        selling_price
        thumbnail
        ratings
      }
    }
  }
`;

export const GET_MORE_PRODUCTS = gql`
  query ($filters: Filter!) {
    products(filters: $filters) {
      hasNextPage
      data {
        id
        name
        slug
        summary
        market_price
        selling_price
        thumbnail
        ratings
      }
    }
  }
`;

export const GET_PRODUCT_WITH_SLUG = gql`
  query ($slug: String!) {
    product(slug: $slug) {
      code
      message
      data {
        id
        name
        summary
        slug
        desc
        market_price
        selling_price
        ratings
        colors {
          id
          hex_code
          name
        }
        sizes {
          id
          name
          name_brief
        }
        gallery {
          id
          name
          source
        }
      }
    }
  }
`;

export const SEARCH_PRODUCT = gql`
  query Search($filters: SearchFilter!) {
    search(filters: $filters) {
      hasNextPage
      data {
        id
        name
        slug
        summary
        market_price
        selling_price
        thumbnail
        ratings
      }
    }
  }
`;
