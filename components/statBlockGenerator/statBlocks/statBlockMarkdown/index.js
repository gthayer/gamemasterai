import styles from '../StatBlock.module.css';
import markdownStyles from './StatBlockMarkdown.module.css';
import Timer from "../../timer";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default function Statblock({statBlock, isLoading}) {

	return (
		<div className="statBlock">
			<div className={styles.statBlock}>
				{!isLoading ? (
				<div className={markdownStyles.styles}>
					<ReactMarkdown 
						remarkPlugins={[gfm]}>{statBlock}</ReactMarkdown>
				</div>
				) : (
					<Timer/>
				)}
			</div>
		</div>
	);
};