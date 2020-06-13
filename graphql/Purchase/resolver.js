let purchase = [
	{
		id: 1,
		user_id: 2,
		product_name: 'Cake',
	},
	{
		id: 2,
		user_id: 2,
		product_name: 'Biscuit',
	},
	{
		id: 3,
		user_id: 2,
		product_name: 'Flowers',
	},
	{
		id: 4,
		user_id: 1,
		product_name: 'Chocholate',
	},
]

exports.resolver = {
	Query: {
		purchase: (_, { user_id }) => {
			return purchase.filter((purchase) => purchase.user_id == user_id)
		},
	},
}
