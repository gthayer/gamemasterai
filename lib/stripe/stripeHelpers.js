export function formatAmountForDisplay(amount, currency) {
	let numberFormat = new Intl.NumberFormat(['en-US'], {
		style: 'currency',
		currency: currency,
		currencyDisplay: 'symbol',
	});

	return numberFormat.format(amount)
}

export function formatAmountForStripe( amount, currency ) {
	let numberFormat = new Intl.NumberFormat(['en-US'], {
		style: 'currency',
		currency: currency,
		currencyDisplay: 'symbol',
	});

	const parts = numberFormat.formatToParts(amount);
	let zeroDecimalCurrency = true;
	for (let part of parts) {
		if (part.type === 'decimal') {
			zeroDecimalCurrency = false
		}
	}
	return zeroDecimalCurrency ? amount : Math.round(amount * 100)
}

export function productNameToId(productName) {

	const idMapping = [
		{ name: '10-tokens',  id: 'price_1MmMQVHectB1oeKZl2QSixDu' },
		{ name: '50-tokens',  id: 'price_1MmMQvHectB1oeKZmJfeyugr' },
		{ name: '100-tokens', id: 'price_1MmMQ0HectB1oeKZ4QwYe60g' },
	];

	return idMapping.find((item) => item.name === productName).id;
}