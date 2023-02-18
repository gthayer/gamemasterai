import ChatItem from "./chat-item";
import Statblock from "../statblock";

export default function Result({conversation}) {
	return (
		<div className="">
			{(conversation.map(c => {
				return ( <ChatItem text={c.text} type={c.type}/> );
			}))}
		</div>
	);
};

