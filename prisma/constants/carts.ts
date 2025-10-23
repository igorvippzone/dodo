import { users } from './users'

export const carts = users.map(({ id }, index) => ({
	id: index + 1 + "",
	userId: id,
	totalAmount: 0,
	token: `token-${id}`
}))