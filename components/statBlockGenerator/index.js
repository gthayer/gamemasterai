import StatBlockJson from './statBlocks/statBlockJson';
import StatBlockMarkdown from './statBlocks/statBlockMarkdown';
import Placeholder from './statBlockPlaceholder';
import Textarea from '../forms/textarea';
import Counter from '../forms/counter';
import Submit from '../forms/submit';
import Select from '../forms/select';
import Login from '../auth/login';
import { useState } from 'react';
import { useSession } from "next-auth/react"

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
	const { data: session } = useSession()

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
				userId: session ? session.user.id : '0'
			}),
		});
		const resp = await response.json();
		setStatBlock(resp);
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
			<div className="md:flex md:flex-row m-auto my-4">
				<div className="md:basis-1/3 align-middle">

					{ ! session ? 
						(
							<Login />
						) : (
							<form 
								className="my-4 md:m-0"
								onSubmit={onSubmit}
								>
								<div className="md:hidden">
									<Counter className="text-right" count={descriptionInput.length} max={maxDescriptionLength}/>
								</div>
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
								<div className="md:flex">
									<Submit className="md:basis-1/2 md:flex-auto" value="Conjure" disabled={isDisabled()}/>
									<Counter className="hidden md:block md:basis-1/2 md:flex-auto text-right" count={descriptionInput.length} max={maxDescriptionLength}/>
								</div>
							</form>
						)
					}
				</div>
				<div className="md:basis-2/3 md:pl-4">
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