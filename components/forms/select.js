export default function Select({options, onChange}) {
	return (
		<select onChange={onChange}>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};