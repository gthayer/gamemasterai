export default function Textarea({name, placeholder, value, onChange}) {
	return (
		<div className="mb-6">
			<textarea
				className="block w-full p-4"
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};