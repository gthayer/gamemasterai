export default function Select({className, options, onChange}) {
	return (
		<div className={className}>
			<select onChange={onChange}>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};