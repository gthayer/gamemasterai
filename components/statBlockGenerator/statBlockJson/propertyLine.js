import styles from '../Statblock.module.css';
export default function ProperyLine({entry, value}) {
	return (
		<div className={styles.propertyLine}>
			<h4>{entry}</h4>
			<p>{value}</p>
		</div>
	)
};