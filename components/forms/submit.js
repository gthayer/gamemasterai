export default function Submit({className, value = "Submit", disabled = true}) {
	let inputClass = "w-full bg-orange font-bold block align-center mt-2 py-2 px-4 focus:outline-none focus:shadow-outline";

	if (disabled) {
		className += " opacity-50 cursor-not-allowed";
	}

	return (
		<div className={className}>
			<input
				className={inputClass} 
				type="submit" 
				value={value}
				disabled={disabled}
			/>
		</div>
	);
};

