const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const { makeExecutableSchema } = require("graphql-tools");

module.exports = async () => {
	const schema = makeExecutableSchema({
		typeDefs,
		resolvers,
	});
	return schema;
};
