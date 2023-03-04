import { useSession, signIn } from "next-auth/react"

export default function Login() {
	const { data: session } = useSession();

	let className = "bg-orange font-bold block w-5/12 align-center mt-2 py-2 px-4 focus:outline-none focus:shadow-outline";

	return (
		<button onClick={signIn} className={className}>Sign In</button>
	)
}
