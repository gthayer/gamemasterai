import styles from '../StatBlock.module.css';
import markdownStyles from './StatBlockMarkdown.module.css';
import Timer from "../../timer";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Rating from '../../../rating';

export default function Statblock({statBlock, isLoading}) {

	console.log(statBlock.id);
	console.log('$$%$$');

	return (
		<div className="statBlock">
			<div className={styles.statBlock}>
				{!isLoading ? (
					<div>
						<Rating statBlockId={statBlock.id}/>
						<div className={markdownStyles.styles}>
							<ReactMarkdown 
								remarkPlugins={[gfm]}>{statBlock.statBlock}</ReactMarkdown>
						</div>
					</div>
				) : (
					<Timer/>
				)}
			</div>
		</div>
	);
};