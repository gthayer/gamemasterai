import StatblockJson from './statBlockJson';
import StatblockMarkdown from './StatblockMarkdown';
import Textarea from '../forms/textarea';
import Submit from '../forms/submit';
import Select from '../forms/select';
import { useState } from 'react';

const endpoint = '/api/stat-block';
const debug = true;

const modelOptions = [
	{ value: 'goblin', label: 'Goblin' },
	{ value: 'kobold', label: 'Kobold' },
	{ value: 'skeleton', label: 'Skeleton' },
]

export default function StatBlockGenerator({monster}) {

	const [descriptionInput, setDescriptionInput] = useState("");
	const [statBlock, setStatBlock] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [selectedModel, setSelectedModel] = useState('goblin');
	const [currentModel, setCurrentModel] = useState('goblin');

	async function onSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
				description: descriptionInput,
				model: selectedModel,
				debug: debug,
			}),
		});
		const data = await response.json();
		setStatBlock(data);
		setCurrentModel(selectedModel);
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
					<Select 
						options={modelOptions}
						onChange={(e) => {setSelectedModel(e.target.value)} }
					/>
					<Submit/>
				</form>
			</>
			<>
				{ currentModel === 'goblin' ? (
					<StatblockJson 
						statBlock={statBlock}
						isLoading={isLoading}
					/>
				) : (
					<StatblockMarkdown 
						statBlock={statBlock}
						isLoading={isLoading}
					/>
				)}
			</>
		</div>
	);
};