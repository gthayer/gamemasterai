import Statblock from './statBlock';
import Textarea from '../forms/textarea';
import Submit from '../forms/submit';
import { useState } from 'react';

const endpoint = '/api/stat-block';

export default function StatBlockGenerator({monster}) {

	const [descriptionInput, setDescriptionInput] = useState("");
	const [statBlock, setStatBlock] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ description: descriptionInput }),
		});
		const data = await response.json();
		setStatBlock(data);
		setIsLoading(false);
	}

	return (
		<div className="columns-2">
			<>
				<form 
					className=""
					onSubmit={onSubmit}
					>
					<Textarea
						label="describe your creature"
						name="description-input"
						placeholder="Describe your creature"
						value={descriptionInput}
						onChange={(e) => setDescriptionInput(e.target.value)}
					/>
					<Submit/>
				</form>
			</>
			<>
				<Statblock statBlock={statBlock} isLoading={isLoading}/>
			</>
		</div>
	);
};