import { hashSync } from 'bcrypt'

import { Prisma } from "@/generated/prisma"

export const users: Prisma.UserCreateInput[] = [
	{
		fullName: "User",
		email: "user@test.ru",
		password: hashSync('111111', 10),
		verified: new Date(),
		role: "USER",
		id: "1"
	},
	{
		fullName: "Admin",
		email: "admin@test.ru",
		password: hashSync('111111', 10),
		verified: new Date(),
		role: "ADMIN",
		id: "2"
	}
]