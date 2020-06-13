let users = {
	1: {
		id: "1",
		username: "Robin Wieruch",
		name: "Prashant Singh",
	},
	2: {
		id: "2",
		username: "Dave Davids",
		name: "Goldman Sach",
	},
};

exports.resolver = {
	Query: {
		users: () => {
			return Object.values(users);
		},
		user: (_, { id }) => {
			return users[id];
		},
	}
}