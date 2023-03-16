import Image from 'next/image';
import styles from './rating.module.css';
import { useState } from 'react';

const endpoint = '/api/rating';

export default function Rating(statBlockId) {

	const [isLoading, setIsLoading] = useState(false);

	async function rateBlock(rating) {
		setIsLoading(true);
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				statBlockId: statBlockId.statBlockId,
				rating: rating
			}),
		});
		const resp = await response.json();
		setIsLoading(false);
	}

	return (
		<div className="rating float-right w-6/12 text-sm mb-4 text-center">
			<div className={styles.rating}>
				<p>Is this what you were looking for?</p>
				<Image
					priority
					className="fill-tan inline-block hover:bg-tan active:bg-tan focus:outline-none focus:ring focus:ring-tan"
					src="/images/happy-face.svg"
					height={28}
					width={28}
					alt="Like Button"
					onClick={() => rateBlock('like')}
				/>
				<Image
					priority
					className="fill-tan inline-block ml-4"
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