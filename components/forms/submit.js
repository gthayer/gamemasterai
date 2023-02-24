export default function Submit({value = "Submit", disabled = true}) {
	let className = "bg-orange font-bold block w-5/12 align-center mt-2 py-2 px-4 focus:outline-none focus:shadow-outline";

	if (disabled) {
		className += " opacity-50 cursor-not-allowed";
	}

	return (
		<input
			className={className} 
			type="submit" 
			value={value}
			disabled={disabled}
		/>
	);
};

