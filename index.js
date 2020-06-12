const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();

const schema = require("./schema");
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen({ port: 8000 }, () => {
	console.log("Apollo Server on http://localhost:8000/graphql");
});
