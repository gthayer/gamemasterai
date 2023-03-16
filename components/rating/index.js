import Image from 'next/image';
import styles from './rating.module.css';
import { useState } from 'react';

const endpoint = '/api/rating';

export default function Rating({statBlock}) {

	const [isLoading, setIsLoading] = useState(false);
	const [rating, setRating] = useState('');

	async function rateBlock(r) {
		
		// Unset the value;
		if (rating === r) {
			r = '';
		}

		setIsLoading(true);
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: statBlock.id,
				rating: rating
			}),
		});
		setRating(r);
		const resp = await response.json();
		setIsLoading(false);
	}

	return (
		<div className='rating float-right w-6/12 text-sm mb-4 text-center'>
			<div className={styles.rating}>
				<p>Is this what you were looking for?</p>
				<Image
					priority
					className={`${rating === 'like' ? `${styles.like}` : ''} fill-tan inline-block`}
					src="/images/happy-face.svg"
					height={28}
					width={28}
					alt="Like Button"
					onClick={() => rateBlock('like')}
				/>
				<Image
					priority
					className={`${rating === 'dislike' ? `${styles.dislike}` : ''} fill-tan inline-block ml-4`}
					src="/images/sad-face.svg"
					height={28}
					width={28}
					alt="Dislike Button"
					onClick={() => rateBlock('dislike')}
				/>
			</div>
		</div>
	)
}