import StatBlockJson from './statBlocks/statBlockJson';
import StatBlockMarkdown from './statBlocks/statBlockMarkdown';
import Placeholder from './statBlockPlaceholder';
import Textarea from '../forms/textarea';
import Counter from '../forms/counter';
import Submit from '../forms/submit';
import Select from '../forms/select';
import Login from '../auth/login';
import { useState } from 'react';

import styles from './StatBlockGenerator.module.css';

const endpoint = '/api/stat-block';
const debug = false;

const maxDescriptionLength = 300;

const modelOptions = [
	{ value: 'skeleton', label: 'Skeleton' },
	{ value: 'goblin', label: 'Goblin' },
]

export default function StatBlockGenerator({monster}) {

	const [descriptionInput, setDescriptionInput] = useState("");
	const [statBlock, setStatBlock] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedModel, setSelectedModel] = useState('skeleton');
	const [currentModel, setCurrentModel] = useState('skeleton');

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

	function isDisabled() {
		if (descriptionInput.length > 3 && !isLoading) {
			return false;
		}
		return true;
	}
	return (
		<div className={styles.statBlockGenerator}>
			<Login/>
			<div className="flex flex-row w-10/12 m-auto">
				<div className="basis-1/3 align-middle">
					<Login/>
					<form 
						onSubmit={onSubmit}
						>
						<Textarea
							label="describe your creature"
							name="description-input"
							maxLength={maxDescriptionLength}
							placeholder="Describe your creature"
							value={descriptionInput}
							onChange={(e) => setDescriptionInput(e.target.value)}
						/>
						{/* 
						// Removing model selects until we have a better fine tuned model to work from.
						<Select 
							options={modelOptions}
							onChange={(e) => {setSelectedModel(e.target.value)} }
						/> 
						*/}
						<div className="flex flex-row">
							<Submit className="basis-1/2" value="Conjure" disabled={isDisabled()}/>
							<Counter className="basis-1/2 text-right" count={descriptionInput.length} max={maxDescriptionLength}/>
						</div>
					</form>
				</div>
				<div className="basis-2/3">
				<hr className={styles.orangeBorder} />
					{ statBlock || isLoading ? (
						<div>
							{ currentModel === 'goblin' ? (
								<StatBlockJson 
									statBlock={statBlock}
									isLoading={isLoading}
								/>
							) : (
								<StatBlockMarkdown 
									statBlock={statBlock}
									isLoading={isLoading}
								/>
							)}
						</div>
					) : (
						<Placeholder/>
					) }
				<hr className={styles.orangeBorder} />
				</div>
			</div>
		</div>
	);
};