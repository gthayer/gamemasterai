import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
	return (
		<header className="w-full bg-black text-tan py-2">
			<div className="container lg:flex px-8">
				<div className="w-full lg:w-6/12 text-center lg:text-left">
					<strong>GamemasterAI helps GM's create immersive roleplaying game experiences and run campaigns with greater ease and efficiency through the use of AI.</strong>
				</div>
				<div className="w-full lg:w-6/12 text-center lg:text-right mt-4 lg:mt-0">
					<span>
						Copyright 2023
					</span>
					<span className="ml-4">
						<Link href="/terms-of-service">
							Terms of Service
						</Link>
					</span>
					<span className="ml-4">
						<Link href="/usage-policy">
							Usage Policy
						</Link>
					</span>
				</div>
			</div>
		</header>
	)
}