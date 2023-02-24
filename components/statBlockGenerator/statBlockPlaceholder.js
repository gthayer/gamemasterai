import styles from './StatBlockGenerator.module.css';
import statBlockStyles from './statBlocks/StatBlock.module.css';

export default function Placeholder() {
	return (
		<div className="w-full">
			<div className={statBlockStyles.statBlock}>
				<div className={styles.statBlockPlaceholder}>
					<h1>Ironman</h1>
					<h2>Large Construct, Unaligned</h2>
					<hr/>
					<h4>Armor Class</h4>
					<p>20 (natural armor)</p>
					<h4>Hit Points</h4>
					<p>210 (20d10 + 100)</p>
					<h4>Speed</h4>
					<p>30 ft., fly 60 ft.</p>
					<hr/>
					<table><thead><tr><th>STR</th><th>DEX</th><th>CON</th><th>INT</th><th>WIS</th><th>CHA</th></tr></thead><tbody><tr><td>24 (+7)</td><td>20 (+5)</td><td>20 (+5)</td><td>18 (+4)</td><td>10 (+0)</td><td>10 (+0)</td></tr></tbody></table>
					<hr/>
					<h4>Saving Throws</h4>
					<p>STR +12, DEX +10, CON +10, INT +9, WIS +5, CHA +5</p>
					<h4>Damage Immunities</h4>
					<p>Poison, Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks</p>
					<h4>Condition Immunities</h4>
					<p>Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned</p>
					<h4>Senses</h4>
					<p>Truesight 120 ft., Passive Perception 10</p>
					<h4>Languages</h4>
					<p>Understands the languages of its creator but can't speak</p>
					<h4>Challenge</h4>
					<p>15 (13,000 XP)</p>
					<h4>Proficiency Bonus</h4>
					<p>+9</p>
					<hr/>
					<h4>Magic Resistance.</h4>
					<p>The ironman has advantage on saving throws against spells and other magical effects.</p>
					<h4>Immutable Form.</h4>
					<p>The ironman is immune to any spell or effect that would alter its form.</p>
					<h4>Magic Weapons.</h4>
					<p>The ironman's weapon attacks are magical.</p>
					<h4>Self-Repair.</h4>
					<p>The ironman regains 10 hit points at the start of its turn. If it has taken fire damage since its last turn, it instead regains 1d10 hit points.</p>
					<h3>Actions</h3>
					<h4>Multiattack.</h4>
					<p>The ironman makes two melee attacks.</p>
					<h4>Slam.</h4>
					<p>Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 18 (3d8 + 5) bludgeoning damage.</p>
					<h4>Repulsor Blast.</h4>
					<p>Ranged Weapon Attack: +10 to hit, range 120 ft., one target. Hit: 22 (4d8 + 5) force damage.</p>
					<h4>Missile Barrage (Recharge 5-6).</h4>
					<p>The ironman launches a barrage of missiles in a 30-foot radius centered on itself. Each creature in that area must make a DC 18 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one.</p>
					<h3>Legendary Actions</h3>
					<p>The ironman can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creatures turn. The ironman regains spent legendary actions at the start of its turn.</p>
					<h4>Attack.</h4>
					<p>The ironman makes one slam attack.</p>
					<h4>Move.</h4>
					<p>The ironman moves up to half its speed.</p>
					<h4>Repulsor Blast (Costs 2 Actions).</h4>
					<p>The ironman uses its Repulsor Blast.</p>
				</div>
			</div>
		</div>
	);
};