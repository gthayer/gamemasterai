export default function Textarea({name, placeholder, value, onChange, maxlength}) {
	return (
			<textarea
				className="block w-full p-4"
				name={name}
				placeholder={placeholder}
				value={value}
				maxlength={maxlength}
				onChange={onChange}
			/>
	);
};