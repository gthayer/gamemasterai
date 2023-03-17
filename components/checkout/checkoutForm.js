import Select from '../forms/select';
import Submit from '../forms/submit';
import { useState } from 'react';
import getStripe from '../../lib/stripe/getStripe';

export default function CheckoutForm() {

	const [selectedProduct, setSelectedProduct] = useState('10-tokens');

	const handleSubmit = async (e) => {
		e.preventDefault();

		// // Create a Checkout Session.
		const response = await fetch('/api/checkout_sessions', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				product: selectedProduct
			}),
		});
		const checkoutSession = await response.json();

		console.log(checkoutSession.id);

		// if (checkoutSession.statusCode === 500) {
		// 	console.error(checkoutSession.message);
		// 	return;
		// }

		// console.log(checkoutSession.body);

		// Redirect to Checkout.
		const stripe = await getStripe();
		const { error } = await stripe.redirectToCheckout({
		  // Make the id field from the Checkout Session creation API response
		  // available to this file, so you can provide it as parameter here
		  // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
		  sessionId: checkoutSession.id,
		});
		// If `redirectToCheckout` fails due to a browser or network
		// error, display the localized error message to your customer
		// using `error.message`.
		console.warn(error.message);
	};

	const productOptions = [
		{ value: '10-tokens', label: '10 Tokens' },
		{ value: '50-tokens', label: '50 Tokens' },
		{ value: '100-tokens', label: '100 Tokens' },
	];

	return (
		<form onSubmit={handleSubmit}>
			<Select 
				options={productOptions}
				onChange={(e) => {setSelectedProduct(e.target.value)} }
			/>
			<Submit disabled={false}/>
		</form>
	)
}