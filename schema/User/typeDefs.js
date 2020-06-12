const { gql } = require("apollo-server-express");
const typeDefs = gql`
	type Query {
		users: [User!]
		user(id: ID!): User
	}
	type User {
		id: ID!
		username: String!
  }
  `;

module.exports = typeDefs;
