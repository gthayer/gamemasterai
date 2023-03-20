import { readTransaction, createTransaction } from '../../../lib/database/transaction.js';

export default async function (req, res) {

	const sessionId = req.query.id;

	try {
		if (!sessionId.startsWith('cs_')) {
		  throw Error('Incorrect CheckoutSession ID.')
		}
		
		const checkout_session = await stripe.checkout.sessions.retrieve(sessionId, {
			expand: ['line_items'],
		})		
		
		// TODO: Write transaction to database.
		const transaction = await readTransaction(sessionId);

		if (!transaction) {

			req.

			console.log('Creating transaction');
			console.log(transactionObject);

			// await createTransaction(transactionObject);
		}
	
		res.status(200).json('resp')
	} catch (err) {
		console.log('err');
		console.log(err);
		const errorMessage = err instanceof Error ? err.message : 'Internal server error';
		res.status(500).json({ statusCode: 500, message: errorMessage });
	}
}
