const merge = require("lodash");
const user = require("./User/resolver");
const purchase = require("./Purchase/resolver");

const resolvers = merge(user, purchase);

module.exports = resolvers;
