import styles from './StatBlockGenerator.module.css';
import statBlockStyles from './statBlocks/StatBlock.module.css';

export default function Placeholder() {
	return (
		<div className="w-full">
			<div className={statBlockStyles.statBlock}>
				<div className={styles.statBlockPlaceholder}>
					<h1>Skeleton</h1>
					<h2>Medium Undead, Neutral Evil</h2>
					<hr/>
					<h4>Armor Class</h4>
					<p>13 (armor scraps)</p>
					<h4>Hit Points</h4>
					<p>13 (2d8 + 4)</p>
					<h4>Speed</h4>
					<p>30 ft.</p>
					<hr/>
					<table><thead><tr><th>STR</th><th>DEX</th><th>CON</th><th>INT</th><th>WIS</th><th>CHA</th></tr></thead><tbody><tr><td>10 (+0)</td><td>14 (+2)</td><td>15 (+2)</td><td>6 (-2)</td><td>8 (-1)</td><td>5 (-3)</td></tr></tbody></table>
					<hr/>
					<h4>Damage Immunities</h4>
					<p>Poison</p>
					<h4>Condition Immunities</h4>
					<p>Exhaustion, Poisoned</p>
					<h4>Senses</h4>
					<p>Darkvision 60 ft., Passive Perception 9</p>
					<h4>Languages</h4>
					<p>Understands all languages it knew in life but can't speak</p>
					<h4>Challenge</h4>
					<p>1/4 (50 XP)</p>
					<h4>Proficiency Bonus</h4>
					<p>+2</p>
					<hr/>
					<h3>Actions</h3>
					<h4>Shortsword</h4>
					<p>Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.</p>
					<h4>Shortbow</h4>
					<p>Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.</p>
				</div>
			</div>
		</div>
	);
};