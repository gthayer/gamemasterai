import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function (req, res) {

	const sessionId = req.query.id;

	try {
		if (!sessionId.startsWith('cs_')) {
		  throw Error('Incorrect CheckoutSession ID.')
		}
		
		const checkout_session = await stripe.checkout.sessions.retrieve(sessionId, {
			expand: ['line_items'],
		})
	
		res.status(200).json(checkout_session)
	} catch (err) {
		console.log('err');
		console.log(err);
		const errorMessage = err instanceof Error ? err.message : 'Internal server error';
		res.status(500).json({ statusCode: 500, message: errorMessage });
	}
}
