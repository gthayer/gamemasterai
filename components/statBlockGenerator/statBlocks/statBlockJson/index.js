import styles from '../StatBlock.module.css';

import TaperedRule from './taperedRule';
import Timer from "../../timer";
import PropertyLine from './propertyLine';

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

function renderSkillProperties(skill) {
	let skillProperties = '';
	for (let key in skill) {
		skillProperties += `${key} +${skill[key]}, `;
	}
	return skillProperties;
}

function renderSavingThrows(statBlock) {
	let combinedString = "";
	combinedString += statBlock.strength_save ? `STR +${statBlock.strength_save}, ` : "";
	combinedString += statBlock.dexterity_save ? `DEX +${statBlock.dexterity_save}, ` : "";
	combinedString += statBlock.constitution_save ? `CON +${statBlock.constitution_save}, `: "";
	combinedString += statBlock.intelligence_save ? `INT +${statBlock.intelligence_save}, ` : "";
	combinedString += statBlock.wisdom_save ? `WIS +${statBlock.wisdom_save}, ` : "";
	combinedString += statBlock.charisma_save ? `CHA +${statBlock.charisma_save}, ` : "";

	return combinedString.trim();
  }

function statBonus(stat) {
	let bonus = Math.floor( ( stat - 10 ) / 2 );
	return (
		'(' + ( bonus < 0 ? '' : '+' ) + bonus + ')'
	)
}

export default function Statblock({statBlock, isLoading}) {
	console.log(statBlock);

	// Saving throws are a special case, so we'll render them separately.
	const savingThrows = renderSavingThrows(statBlock);

	return (
		<div className={openSans.className}>
			<div className={styles.statBlock}>
				<hr className={styles.orangeBorder} />


				{!isLoading ? (
				<>
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
							<PropertyLine entry="STR" value={`${statBlock.strength} ${statBonus(statBlock.strength)}`}/>
							<PropertyLine entry="DEX" value={`${statBlock.dexterity} ${statBonus(statBlock.dexterity)}`}/>
							<PropertyLine entry="CON" value={`${statBlock.constitution} ${statBonus(statBlock.constitution)}`}/>
							<PropertyLine entry="INT" value={`${statBlock.intelligence} ${statBonus(statBlock.intelligence)}`}/>
							<PropertyLine entry="WIS" value={`${statBlock.wisdom} ${statBonus(statBlock.wisdom)}`}/>
							<PropertyLine entry="CHA" value={`${statBlock.charisma} ${statBonus(statBlock.charisma)}`}/>
						</div>

						<TaperedRule/>

						{ savingThrows ? <PropertyLine entry="Saving Throws" value={savingThrows}/> : null }

						{ statBlock.damage_immunities ? <PropertyLine entry="Damage Immunities" value={statBlock.damage_immunities}/> : null }
						{ statBlock.damage_vulnerabilities ? <PropertyLine entry="Damage Vulnerabilities" value={statBlock.damage_vulnerabilities}/> : null }
						{ statBlock.damage_resistances ? <PropertyLine entry="Damage Resistances" value={statBlock.damage_resistances}/> : null }	
						{ statBlock.condition_immunities ? <PropertyLine entry="Condition Immunities" value={statBlock.condition_immunities}/> : null }
						{ statBlock.senses ? <PropertyLine entry="Senses" value={statBlock.senses}/> : null }
						{ statBlock.languages ? <PropertyLine entry="Languages" value={statBlock.languages}/> : null }
						{ statBlock.skills ? <PropertyLine entry="Skills" value={`${renderSkillProperties(statBlock.skills)}`}/> : null }
						{ statBlock.challenge_rating ? <PropertyLine entry="Challenge" value={statBlock.challenge_rating}/> : null }
						
				
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
				</>
				) : (
					<Timer/>
				)}
				
				<hr className={styles.orangeBorder} />
			</div>
		</div>
	);
};