export default function counter({count = 0, max = 300}) {
	return (
		<div className="p-1 text-right text-tan w-full">
			{`${count}/${max}`}
		</div>
	);
}