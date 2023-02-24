import styles from '../StatBlock.module.css';
export default function TaperedRule() {
	return (
		<div className={styles.taperedRule}>
			<svg height="5" width="100%" className={styles.taperedRule}>
				<polyline points="0,0 700,2.5 0,5"></polyline>
			</svg>
		</div>
	)
};