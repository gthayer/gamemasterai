import { Baskervville, Open_Sans } from '@next/font/google'
import Statblock from './statBlock';
import Textarea from '../forms/textarea';
import Submit from '../forms/submit';
import { useState } from 'react';

const endpoint = '/api/stat-block';

const baskervville = Baskervville({ 
  weight: '400',
  subsets: ['latin'],
})

const openSans = Open_Sans({
	subsets: ['latin'],
});

export default function StatBlockGenerator({monster}) {

	const [descriptionInput, setDescriptionInput] = useState("");
	const [statBlock, setStatBlock] = useState({});
	async function onSubmit(event) {
		event.preventDefault();
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ description: descriptionInput }),
		});
		const data = await response.json();
		setStatBlock(data);
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
				<Statblock statBlock={statBlock}/>
			</>
		</div>
	);
};