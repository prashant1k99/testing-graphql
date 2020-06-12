const { gql } = require("apollo-server-express");
const typeDefs = gql`
	type Query {
		purchase(user_id: ID!): [Purchase]
	}
	type Purchase {
		id: Int
		user_id: ID!
		product_name: String!
	}
`;

module.exports = typeDefs;
