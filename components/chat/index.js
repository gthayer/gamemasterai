import Textarea from './textarea';
import Submit from './submit';
import Results from './results';
import { useState } from 'react';

export default function Chat({endpoint}) {

	const [questionInput, setQuestionInput] = useState("");
	const [result, setResult] = useState();
	const [conversation, setConversation] = useState([]);

	async function onSubmit(event) {
		event.preventDefault();
		setConversation([...conversation, {text: questionInput, type:'send'}]);
		setQuestionInput("");
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ question: questionInput }),
		});
		const data = await response.json();
		setResult(data.result);
		setConversation([...conversation, {text: questionInput, type:'send'}, {text: data.result, type:'response'} ]);
	}

	return (
		<div className="">
          <Results conversation={conversation}/>
          <form 
            className=""
            onSubmit={onSubmit}
            >
            <Textarea
              label="Enter a question"
              name="question"
              placeholder="Enter an question"
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
            />
            <Submit/>
          </form>
		</div>
	);
};
