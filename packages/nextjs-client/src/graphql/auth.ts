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
