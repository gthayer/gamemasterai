import ReactMarkdown from 'react-markdown'

export default function Send({text, type}) {

	return (
		<div className={`block w-full p-4 border-solid border-t-2 border-slate-400 whitespace-pre-line ${'response' === type ? "bg-slate-100" : ""}`}>
			<ReactMarkdown>{text}</ReactMarkdown>
		</div>
	);
};
