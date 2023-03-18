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

		if (checkoutSession.statusCode === 500) {
			console.error(checkoutSession.message);
			return;
		}

		// Redirect to Checkout.
		const stripe = await getStripe();
		const { error } = await stripe.redirectToCheckout({
		  sessionId: checkoutSession.id,
		});
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