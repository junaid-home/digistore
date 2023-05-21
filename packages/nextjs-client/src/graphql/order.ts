import { gql } from "@apollo/client";

export const GET_USER_ORDERS = gql`
  query {
    orders {
      code
      status
      data {
        id
        status
        payment {
          id
          amount
          method
        }
        items {
          color
          size
          quantity
          product {
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
    }
  }
`;

export const SAVE_ORDER_WITH_COD = gql`
  mutation ($items: [OrderItemInput!]!) {
    createOrder(items: $items) {
      code
      message
      status
    }
  }
`;
