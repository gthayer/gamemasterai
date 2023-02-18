import ReactMarkdown from 'react-markdown'
import Statblock from "../statblock";

export default function ChatItem({text, type}) {

	return (
		<div className={`block w-full p-4 border-solid border-t-2 border-slate-400 whitespace-pre-line $`}>
			<ReactMarkdown>{text}</ReactMarkdown>
			<Statblock monster={text}/>

			{
				'response' === type ? 
				<Statblock monster={text}/> : 
				<ReactMarkdown>{text}</ReactMarkdown>
			}
		</div>
	);
};
