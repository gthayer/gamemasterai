import {productNameToId} from '../../../lib/stripe/stripeHelpers';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async function (req, res) {

	const productId = productNameToId(req.body.product);

	const params = {
		payment_method_types: ['card'],
		line_items: [
			{
				price: productId,
				quantity: 1
			},
		],
		mode: 'payment',
		success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
	};

	const checkoutSession = await stripe.checkout.sessions.create(params);

	res.status(200).json(checkoutSession);
}
