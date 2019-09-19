const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar Date

  type Query {
    getUser: User
  }

  type User {
    id: Int
    email: String
    fullname: String
  }

  type Mutation {
    signUp(
      email: String!
      password: String!
      fullname: String!
    ): SignupResponse!
    logIn(email: String!, password: String!): LoginResponse!
  }

  type SignupResponse {
    message: String
  }

  type LoginResponse {
    message: String
  }
`;
