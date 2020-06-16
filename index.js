var express = require('express')
var bodyParser = require('body-parser')
var graphqlHTTP = require('express-graphql')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
const schema = require('./graphql')

var app = express()
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: false,
		endpointURL: 'http://localhost:4000/graphql',
	})
)

app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/')
