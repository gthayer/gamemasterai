import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';

export default function Header() {
	const { data: session } = useSession()

	return (
		<header className="fixed top-0 w-full bg-black text-tan py-2">
			<div className="container flex px-8">
				<div className="w-7/12 md:w-8/12">
					<span className="text-lg font-bold">GamemasterAI</span>
				</div>
				<div className="flex-auto w-1/12 text-right">
					<a href="https://www.reddit.com/r/gamemasterai/" target="_blank">
						<Image
							priority
							className="fill-tan inline-block"
							src="/images/reddit-icon.svg"
							height={28}
							width={28}
							alt="Join us on Reddit"
						/>
					</a>
				</div>

				<div className="flex-auto w-3/12 text-right cursor-pointer">
					{ session ? 
						<span onClick={() => signOut()}>
							Sign Out
						</span>
					: 
						<span onClick={() => signIn()}>
							Sign In
						</span>
					}
				</div>
			</div>
		</header>
	)
}