import ReactMarkdown from 'react-markdown'

export default function ChatItem({text, type}) {

	return (
		<div className={`block w-full p-4 border-solid border-t-2 border-slate-400 whitespace-pre-line $`}>
			<ReactMarkdown>{text}</ReactMarkdown>
		</div>
	);
};
