import ChatItem from "./chat-item";

export default function Result({conversation}) {
	return (
		<div className="">
			{(conversation.map(c => {
				return ( <ChatItem text={c.text} type={c.type}/> );
			}))}
		</div>
	);
};

