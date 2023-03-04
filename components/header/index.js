import { useSession, signIn, signOut } from "next-auth/react"

export default function Header() {
	const { data: session } = useSession()

	return (
		<header className="fixed top-0 w-full bg-black text-tan flex flex-row">
			<div className="w-8/12">
				<h1>GamemasterAI</h1>
			</div>
			<div className="w-2/12">
				REDDIT ICON
			</div>

			<div className="w-2/12">
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
		</header>
	)
}