import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function createStatBlock(prompt = '', statBlock = '', userId = '0', rating = '', model='skeleton') {

	const resp = await prisma.StatBlock.create({
			data: {
				prompt: prompt,
				statBlock: statBlock,
				userId: userId,
				rating: rating,
				model: model
			},
		});
	return resp;
}

export async function updateRating(statBlockId, rating) {

	const resp = await prisma.StatBlock.update({
		where: {
			id: statBlockId,
		},
		data: {
			rating: rating,
		},
	});

	return resp;
}