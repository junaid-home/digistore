import { v4 as uuid } from "uuid";

import Address from "../models/Address";
import User from "../models/User";
import dataSource from "../config/db";

import { generateToken } from "../helpers/jwt";
import { encryptPassword, verifyPassword } from "../helpers/hasher";
import responseSerializer from "../helpers/response-serializer";

import {
  newUserValidator,
  LoginCredentialsValidator,
} from "../validators/user";

export const typeDefs = `#graphql
  input Credentials {
    email: String!
    password: String!
  }

  input NewUser {
    name: String!
    email: String!
    phone: String!
    password: String!
    city: String!
    postal_code: Int!
    residential_address: String!
  }

  input UserUpdate {
    name: String!
    phone: String!
    city: String!
    postal_code: Int!
    residential_address: String!
  }

  extend type Mutation {
    login(credentials: Credentials!): UserAuthResponse!
    createUser(user: NewUser!): UserAuthResponse!
    updateUser(user: UserUpdate!): UserUpdateResponse!
  }

  type SafeUser {
    id: ID!
    name: String!
    email: String!
    phone: String!
    address: Address!
    created_at: String!
    updated_at: String!
  }

  type Address {
    id: ID!
    city: String!
    postal_code: Int!
    residential_address: String!
    created_at: String!
    updated_at: String!
  }

  type UserAuthResponse implements Response {
    code: Int!
    status: String!
    message: String
    data: UserAuthSuccessData
  }

  type UserAuthSuccessData {
    token: String
    user: SafeUser
  }

  type UserUpdateResponse implements Response {
    code: Int!
    status: String!
    message: String!
  }
`;

export const resolvers = {
  Mutation: {
    async login(_parent, args, _contextValue, _info) {
      const error = LoginCredentialsValidator(args.credentials);
      if (error) {
        return {
          status: "error",
          code: 400,
          message: error.message,
        };
      }

      const { credentials: user } = args;

      try {
        const userRepository = dataSource.getRepository(User);
        const addressRepository = dataSource.getRepository(Address);

        const queriedUser = await userRepository.findOne({
          where: { email: user.email },
        });
        if (!queriedUser) {
          throw new Error(
            `User with email "${user.email}" don't exist, please signup!`
          );
        }

        const { password, salt } = queriedUser;

        const isValidPassword = await verifyPassword(
          password,
          salt,
          user.password
        );
        if (!isValidPassword) {
          throw new Error(`Invalid Password!`);
        }

        const queriedAddress = await addressRepository.findOne({
          where: {
            user: { id: queriedUser.id },
          },
        });

        const userWithPopulatedAddress = {
          ...queriedUser,
          password: undefined,
          address: { ...queriedAddress },
        };

        const token = generateToken(userWithPopulatedAddress);

        return responseSerializer(200, {
          token,
          user: userWithPopulatedAddress,
        });
      } catch (err) {
        return responseSerializer(500, err.message);
      }
    },
    async createUser(_parent, args, _contextValue, _info) {
      const error = newUserValidator(args.user);
      if (error) {
        return {
          status: "error",
          code: 400,
          message: error.message,
        };
      }

      const { user: newUser } = args;

      try {
        const userRepository = dataSource.getRepository(User);

        const isAlreadyExists = await userRepository.findOne({
          where: { email: newUser.email },
        });
        if (isAlreadyExists) {
          throw new Error("User Already exists, please login!");
        }

        const encryptedPass = await encryptPassword(newUser.password);

        const user = new User();
        user.id = uuid();
        user.name = newUser.name;
        user.email = newUser.email;
        user.phone = newUser.phone;
        user.password = encryptedPass.hash;
        user.salt = encryptedPass.salt;

        const address = new Address();
        address.id = uuid();
        address.city = newUser.city;
        address.postal_code = newUser.postal_code;
        address.residential_address = newUser.residential_address;
        address.user = user;

        const savedUserWithPopulatedAddress = await dataSource.transaction(
          async (manager) => {
            const savedUser = await manager.save(user);
            const savedAddress = await manager.save(address);

            const populatedUser = {
              ...savedUser,
              password: undefined,
              address: { ...savedAddress, user: undefined },
            };

            return populatedUser;
          }
        );

        const token = generateToken(savedUserWithPopulatedAddress);

        return responseSerializer(200, {
          token,
          user: savedUserWithPopulatedAddress,
        });
      } catch (err) {
        return responseSerializer(500, err.message);
      }
    },

    async updateUser(_parent, args, context, _info) {
      try {
        const userRepository = dataSource.getRepository(User);
        const addressRepository = dataSource.getRepository(Address);

        if (!context.isAuthenticated || !context.user)
          return responseSerializer(401, "Invalid Authentication Token!");

        const user = await userRepository.findOneBy({ id: context.user.id });
        user.name = args.user.name;
        user.phone = args.user.phone;

        await userRepository.save(user);

        const address = await addressRepository.findOneBy({
          user: { id: context.user.id },
        });
        address.city = args.user.city;
        address.residential_address = args.user.residential_address;
        address.postal_code = args.user.postal_code;

        await addressRepository.save(address);

        return responseSerializer(200, "Success");
      } catch (err) {
        return responseSerializer(500, "Failed To Update Profile!");
      }
    },
  },
};
