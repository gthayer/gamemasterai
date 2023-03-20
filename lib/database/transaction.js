import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function createTransaction(transactionObject) {
	const resp = await prisma.Transaction.create({
		data: {
			sessionID: sessionID,
			amount: amount,
			product: product,
			userId: userId
		},
	});
	
	return resp;
}

export async function readTransaction(sessionID = '0') {
	const transaction = await prisma.Transaction.findMany({
		where: {
			sessionID:sessionID,
		},
	});

	if (transaction.length === 0) {
		return null;
	}

	return transaction[0];
}
