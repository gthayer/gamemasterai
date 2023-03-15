import Image from 'next/image';

export default function Ratings() {

	return (
		<div className="float-right w-6/12 text-sm mb-4 text-center">
				<p>Is this what you were looking for?</p>
				<Image
					priority
					className="fill-tan inline-block"
					src="/images/happy-face.svg"
					height={28}
					width={28}
					alt="Join us on Reddit"
				/>
				<Image
					priority
					className="fill-tan inline-block ml-2"
					src="/images/sad-face.svg"
					height={28}
					width={28}
					alt="Join us on Reddit"
				/>
		</div>
	)
}