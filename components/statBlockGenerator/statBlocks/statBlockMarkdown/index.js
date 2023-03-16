import styles from '../StatBlock.module.css';
import markdownStyles from './StatBlockMarkdown.module.css';
import Timer from "../../timer";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Rating from '../../../rating';

export default function Statblock({statBlock, isLoading}) {

	return (
		<div className="statBlock">
			<div className={styles.statBlock}>
				{!isLoading ? (
					<div>
						<Rating/>
						<div className={markdownStyles.styles}>
							<ReactMarkdown 
								remarkPlugins={[gfm]}>{statBlock}</ReactMarkdown>
						</div>
					</div>
				) : (
					<Timer/>
				)}
			</div>
		</div>
	);
};