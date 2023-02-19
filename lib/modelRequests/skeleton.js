import { Configuration, OpenAIApi } from 'openai';
import remarkGfm from 'remark-gfm';

// Open AI details.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const exampleBlock = `# Tarrasque\
## Gargantuan Monstrosity (Titan), Unaligned\
---\
#### Armor Class\
25 (natural armor)\
#### Hit Points\
676 (33d20 + 330)\
#### Speed\
40 ft.\
---\
|STR|DEX|CON|INT|WIS|CHA|\
--- | --- | ---| --- | --- | --- |\
|30 (+10)|11 (+0)|30 (+10)|3 (-4)|11 (+0)|11 (+0)|\
---\
#### Saving Throws\
INT +5, WIS +9, CHA +9\
#### Damage Immunities\
Fire, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks\
#### Condition Immunities\
Charmed, Frightened, Paralyzed, Poisoned\
#### Senses\
Blindsight 120 ft., Passive Perception 10\
#### Languages\
--\
#### Challenge\
30 (155,000 XP)\
#### Proficiency Bonus\
+9\
---\
#### Legendary Resistance (3/Day).\
If the tarrasque fails a saving throw, it can choose to succeed instead.\
#### Magic Resistance\
The tarrasque has advantage on saving throws against spells and other magical effects.\
#### Reflective Carapace\
Any time the tarrasque is targeted by a [magic missile](/spells/magic-missile) spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target.\
#### Siege Monster\
The tarrasque deals double damage to objects and structures.\
### Actions\
#### Multiattack\
The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite.\
#### Bite\
Melee Weapon Attack:_ +19 to hit, reach 10 ft., one target. _Hit:_ 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can’t bite another target.\
#### Claw.\
Melee Weapon Attack:_ +19 to hit, reach 15ft., one target. _Hit:_ 28 (4d8 + 10) slashing damage.\
#### Horns.\
Melee Weapon Attack:_ +19 to hit, reach 10ft., one target. _Hit:_ 32 (4d10 + 10) piercing damage.\
#### Tail.\
Melee Weapon Attack:_ +19 to hit, reach 20ft., one target. _Hit:_ 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked [prone](/compendium/rules/basic-rules/appendix-a-conditions#Prone).\
#### Frightful Presence.\
Each creature of the tarrasque’s choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/compendium/rules/basic-rules/appendix-a-conditions#Frightened) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the tarrasque’s Frightful Presence for the next 24 hours.\
#### Swallow.\
The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite’s damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque’s turns.\
If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.\
### Legendary Actions\
The tarrasque can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature’s turn. The tarrasque regains spent legendary actions at the start of its turn.\
#### Attack.\
The tarrasque makes one claw attack or tail attack.\
#### Move.\
The tarrasque moves up to half its speed.\
#### Chomp (Costs 2 Actions).\
The tarrasque makes one bite attack or uses its Swallow.`;

export const skeletonRequest = async (prompt, debug) => {
    
	prompt = `Create a 5e monster stat block based on the user's prompt. Return a response in a markdown format using this example: ${exampleBlock}\
		
    Prompt: ${prompt}\
		Stat Block: `;

    const model = 'text-davinci-003';

    try {
      let result = '';
      if (!debug) {
        const completion = await openai.createCompletion({
          model: model,
          prompt: prompt,
          temperature: 0,
          max_tokens: 1950
        });
  
        result = completion.data.choices[0].text;
        console.log(result);
      } else {
        result = `"\n\n## Cool\n\n**Huge elemental, chaotic evil**\n\n___Armor Class___ 17 (natural armor)\n\n___Hit Points___ 180 (20d12 + 40)\n\n___Speed___ 40 ft.\n\n___STR___ 24 (+7)\n\n___DEX___ 16 (+3)\n\n___CON___ 18 (+4)\n\n___INT___ 8 (-1)\n\n___WIS___ 10 (+0)\n\n___CHA___ 10 (+0)\n\n___Damage Immunities___ Fire, Poison\n\n___Condition Immunities___ Poisoned\n\n___Senses___ Darkvision 60 ft., passive Perception 10\n\n___Languages___ Primordial\n\n___Challenge___ 8 (3,900 XP)\n\n___Ice Form.___ The cool can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.\n\n___Frost Aura.___ At the start of each of the cool's turns, each creature within 10 feet of it takes 10 (3d6) cold damage.\n\n___Actions___\n\n***Multiattack.*** The cool makes two slam attacks.\n\n***Slam.*** Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage and 10 (3d6) cold damage."`;
      }

      result = cleanResult(result);
	    return result;
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
	  return JSON.stringify(error);
    }
}

function cleanResult(result) {

  return result;
}