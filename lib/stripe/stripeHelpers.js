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

	let idMapping = [];
	if ( process.env.STRIPE_DEV_MODE ) {
		idMapping = [
			{ name: '10-tokens',  id: 'price_1Mmh2mHectB1oeKZitKrU5US' },
			{ name: '50-tokens',  id: 'price_1Mmh2VHectB1oeKZgEHpxshm' },
			{ name: '100-tokens', id: 'price_1Mmh3THectB1oeKZpmMLgqll' },
		];
	} else {
		idMapping = [
			{ name: '10-tokens',  id: 'price_1Mmh5mHectB1oeKZqlikfW0m' },
			{ name: '50-tokens',  id: 'price_1Mmh5rHectB1oeKZjAwwk8Pw' },
			{ name: '100-tokens', id: 'price_1Mmh5GHectB1oeKZ43dyeGYB' },
		];
	}

	return idMapping.find((item) => item.name === productName).id;
}