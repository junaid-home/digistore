import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($credentials: Credentials!) {
    login(credentials: $credentials) {
      code
      message
      status
      data {
        token
        user {
          id
          email
          name
          phone
          created_at
          updated_at
          address {
            id
            city
            postal_code
            residential_address
            created_at
            updated_at
          }
          likes {
            id
            name
            slug
            summary
            market_price
            selling_price
            ratings
            thumbnail
          }
        }
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation CreateNewUser($user: NewUser!) {
    createUser(user: $user) {
      code
      message
      status
      data {
        token
        user {
          id
          name
          email
          phone
          created_at
          updated_at
          address {
            id
            city
            postal_code
            residential_address
            created_at
            updated_at
          }
        }
      }
    }
  }
`;

export const UPDATE_USER_DATA = gql`
  mutation ($user: UserUpdate!) {
    updateUser(user: $user) {
      status
      message
    }
  }
`;

export const ADD_PRODUCT_TO_USER_LIKE = gql`
  mutation ($productId: String!) {
    addLike(productId: $productId) {
      status
      message
    }
  }
`;
