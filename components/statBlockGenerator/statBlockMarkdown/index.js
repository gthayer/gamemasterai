import styles from './Statblock.module.css';
import { Baskervville, Open_Sans } from '@next/font/google'
import Timer from "../timer";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const baskervville = Baskervville({ 
  weight: '400',
  subsets: ['latin'],
})

const openSans = Open_Sans({
	subsets: ['latin'],
});

export default function Statblock({statBlock, isLoading}) {

	return (
		<div className={openSans.className}>
			<div className={styles.statBlock}>
				<hr className={styles.orangeBorder} />
				{!isLoading ? (
				<>
					<ReactMarkdown 
						remarkPlugins={[gfm]}>{statBlock}</ReactMarkdown>
				</>
				) : (
					<Timer/>
				)}
				<hr className={styles.orangeBorder} />
			</div>
		</div>
	);
};