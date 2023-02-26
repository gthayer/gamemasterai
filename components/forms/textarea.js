export default function Textarea({name, placeholder, value, onChange, maxLength}) {
	return (
			<textarea
				className="block w-full p-4"
				name={name}
				placeholder={placeholder}
				value={value}
				maxLength={maxLength}
				onChange={onChange}
			/>
	);
};