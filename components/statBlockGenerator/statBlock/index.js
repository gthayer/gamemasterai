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

export default function Statblock({monster}) {
	return (
		<div className={openSans.className}>
			<div className={styles.statBlock}>
				<hr className={styles.orangeBorder} />
				<div className={styles.creatureHeading}>
					<h1 className={baskervville.className}>Animated Armor</h1>
					<h2>Medium construct, unaligned</h2>
				</div>
				<TaperedRule/>
				<div className="top-stats">
					<PropertyLine entry="Armor Class" value="18 (natural armor)"/>
					<PropertyLine entry="Hit Points" value="33 (6d8 + 6)"/>
					<PropertyLine entry="Speed" value="25ft."/>
					<TaperedRule/>
					<div className={styles.abilities}>
						<PropertyLine entry="STR" value="14 (+2)"/>
						<PropertyLine entry="DEX" value="14 (+2)"/>
						<PropertyLine entry="CON" value="14 (+2)"/>
						<PropertyLine entry="INT" value="14 (+2)"/>
						<PropertyLine entry="WIS" value="14 (+2)"/>
						<PropertyLine entry="CHA" value="14 (+2)"/>
					</div>
					<TaperedRule/>
					<PropertyLine entry="Damage Immunities" value="14 (+2)"/>
					<PropertyLine entry="Condition Immunities" value="14 (+2)"/>
					<PropertyLine entry="Senses" value="14 (+2)"/>
					<PropertyLine entry="Languages" value="14 (+2)"/>
					<PropertyLine entry="Challenge" value="14 (+2)"/>
				</div>
				<TaperedRule/>
				<div className={styles.propertyBlock}>
					<h4>Antimagic Suceptibility.</h4>
					<p>The armor is incapacitated while in the area of an <i>antimagic
					field</i>.  If targeted by <i>dispel magic</i>, the armor must succeed
					on a Constitution saving throw against the caster’s spell save DC or
					fall unconscious for 1 minute.</p>
				</div>
				<div className={styles.propertyBlock}>
					<h4>False Appearance.</h4>
					<p>While the armor remains motionless, it is indistinguishable from a
					normal suit of armor.</p>
				</div>
				<div className={styles.actions}>
					<h3>Actions</h3>
					<div className={styles.propertyBlock}>
						<h4>Multiattack.</h4>
						<p>The armor makes two melee attacks.</p>
					</div>
					<div className={styles.propertyBlock}>
						<h4>Slam.</h4>
						<p><i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
				<i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.</p>
					</div>
				</div>
				<div className={styles.actions}>
					<h3>Legendary Actions</h3>
					<div className={styles.propertyBlock}>
						<h4>Multiattack.</h4>
						<p>The armor makes two melee attacks.</p>
					</div>
					<div className={styles.propertyBlock}>
						<h4>Slam.</h4>
						<p><i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
				<i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.</p>
					</div>
				</div>
				<hr className={styles.orangeBorder} />
			</div>
		</div>
	);
};