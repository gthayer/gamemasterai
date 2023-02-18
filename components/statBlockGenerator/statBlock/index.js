import styles from './Statblock.module.css';
import { Baskervville, Open_Sans } from '@next/font/google'

import TaperedRule from './taperedRule';
import PropertyLine from './propertyLine';

const baskervville = Baskervville({ 
  weight: '400',
  subsets: ['latin'],
})

const openSans = Open_Sans({
	subsets: ['latin'],
});

function renderSpeedProperties(speed) {
	let speedProperties = '';
	for (let key in speed) {

		if ( key === 'walk' ) {
			speedProperties += `${speed[key]} ft.`;
		} else {
			speedProperties += `${key} ${speed[key]} ft.`;
		}
	}
	return speedProperties;
}

export default function Statblock({statBlock}) {
	console.log(statBlock);
	return (
		<div className={openSans.className}>
			<div className={styles.statBlock}>
				<hr className={styles.orangeBorder} />
				<div className={styles.creatureHeading}>
					<h1 className={baskervville.className}>{statBlock.name}</h1>
					<h2>{statBlock.size} {statBlock.type}, {statBlock.alignment}</h2>
				</div>
				<TaperedRule/>
				<div className="top-stats">
					<PropertyLine entry="Armor Class" value={`${statBlock.armor_class} (${statBlock.armor_desc})`}/>
					<PropertyLine entry="Hit Points" value={`${statBlock.hit_points} (${statBlock.hit_dice})`} />
					<PropertyLine entry="Speed" value={renderSpeedProperties(statBlock.speed)}/>
					
					<TaperedRule/>
					<div className={styles.abilities}>
						<PropertyLine entry="STR" value={statBlock.strength}/>
						<PropertyLine entry="DEX" value={statBlock.dexterity}/>
						<PropertyLine entry="CON" value={statBlock.constitution}/>
						<PropertyLine entry="INT" value={statBlock.intelligence}/>
						<PropertyLine entry="WIS" value={statBlock.wisdom}/>
						<PropertyLine entry="CHA" value={statBlock.charisma}/>
					</div>
					<TaperedRule/>
					<PropertyLine entry="Damage Immunities" value={statBlock.damage_immunities}/>
					<PropertyLine entry="Damage Vulnerabilities" value={statBlock.damage_vulnerabilities}/>
					<PropertyLine entry="Damage Resistances" value={statBlock.damage_resistances}/>
					<PropertyLine entry="Condition Immunities" value={statBlock.condition_immunities}/>
					<PropertyLine entry="Senses" value={statBlock.senses}/>
					<PropertyLine entry="Languages" value={statBlock.languages}/>
					<PropertyLine entry="Challenge" value={statBlock.challenge_rating}/>
				</div>
				<TaperedRule/>

				{ statBlock.actions ? 
					<div className={styles.actions}>
						<h3>Actions</h3>
							{ statBlock.actions.map((ability) => {
								return <PropertyLine entry={ability.name} value={ability.desc}/>
							}) }
					</div>
					: null
				}
				
				{ statBlock.legendary_actions ? 
					<div className={styles.actions}>
						<h3>Legendary Actions</h3>
							{ statBlock.legendary_actions.map((ability) => {
								return <PropertyLine entry={ability.name} value={ability.desc}/>
							}) }
					</div>
					: null
				}
				
				{ statBlock.special_abilities ? 
					<div className={styles.actions}>
						<h3>Special Abilities</h3>
							{ statBlock.special_abilities.map((ability) => {
								return <PropertyLine entry={ability.name} value={ability.desc}/>
							}) }
					</div>
					: null
				}
				
				<hr className={styles.orangeBorder} />
			</div>
		</div>
	);
};