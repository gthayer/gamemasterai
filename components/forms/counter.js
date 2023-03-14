export default function counter({className ='', count = 0, max = 300}) {
	return (
		<div className={className}>
			<div className="p-1 text-right text-tan w-full">
				{`${count}/${max}`}
			</div>
		</div>
	);
}