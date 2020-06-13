var express = require('express')
var bodyParser = require('body-parser')
const { makeExecutableSchema } = require('graphql-tools')
const glue = require('schemaglue')
var express = require('express')
var graphqlHTTP = require('express-graphql')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const { schema, resolver } = glue('graphql')

const executableSchema = makeExecutableSchema({
	typeDefs: schema,
	resolvers: resolver,
})

var app = express()
app.use(
	'/',
	graphqlHTTP({
		schema: executableSchema,
		graphiql: true,
	})
)

app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/')
