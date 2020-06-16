const path = require('path')
const { mergeResolvers } = require('graphql-tools')
const { loadFilesSync } = require('graphql-tools')

const resolversArray = loadFilesSync(path.join(__dirname, './**/resolver.js'))
module.exports = mergeResolvers(resolversArray)
