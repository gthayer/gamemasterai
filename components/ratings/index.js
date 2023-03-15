import Image from 'next/image';
import styles from './ratings.module.css';

export default function Ratings() {

	return (
		<div className="ratings float-right w-6/12 text-sm mb-4 text-center">
			<div className={styles.ratings}>
				<p>Is this what you were looking for?</p>
				<Image
					priority
					className="fill-tan inline-block hover:bg-tan active:bg-tan focus:outline-none focus:ring focus:ring-tan"
					src="/images/happy-face.svg"
					height={28}
					width={28}
					alt="Join us on Reddit"
				/>
				<Image
					priority
					className="fill-tan inline-block ml-4"
					src="/images/sad-face.svg"
					height={28}
					width={28}
					alt="Join us on Reddit"
				/>
			</div>
		</div>
	)
}