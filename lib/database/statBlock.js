import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function createStatBlock(prompt = '1', statBlock = '2', model='skeleton', user = 0, rating = '1') {

	const resp = await prisma.StatBlock.create({
			data: {
				prompt: prompt,
				response: statBlock,
				user: user,
				rating: rating
			},
		});

	console.log('prisma resp');
	console.log(resp);
	return resp;
}