const path = require('path')
const { loadFilesSync, mergeTypeDefs } = require('graphql-tools')

// const resolversArray = loadFilesSync('./**/*', {
// 	extensions: ['.graphql'],
// })
const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'))

module.exports = mergeTypeDefs(typesArray, { all: true })
