import { Configuration, OpenAIApi } from 'openai';
import remarkGfm from 'remark-gfm';

// Open AI details.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const model = 'gpt-3.5-turbo';

const exampleBlock = `\
# Tarrasque\n
## Gargantuan Monstrosity (Titan),\n
\ Unaligned\n
---\n
#### Armor Class\n
25 (natural armor)\n
#### Hit Points\n
676 (33d20 + 330)\n
#### Speed\n
40 ft.\n
---\n
| STR | DEX | CON | INT | WIS | CHA |
| --- | --- | --- | --- | --- | --- |
| 30 (+10) | 11 (+0) | 30 (+10) | 3 (-4) | 11 (+0) | 11 (+0) |
---\n
#### Saving Throws\n
INT +5, WIS +9, CHA +9\n
#### Damage Immunities\n
Fire, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks\n
#### Condition Immunities\n
Charmed, Frightened, Paralyzed, Poisoned\n
#### Senses\n
Blindsight 120 ft., Passive Perception 10\n
#### Languages\n
--\n
#### Challenge\n
30 (155,000 XP)\n
#### Proficiency Bonus\n
+9\n
---\n
\n
#### Legendary Resistance (3/Day).\n
If the tarrasque fails a saving throw, it can choose to succeed instead.\n
#### Magic Resistance\n
The tarrasque has advantage on saving throws against spells and other magical effects.\n
#### Reflective Carapace\n
Any time the tarrasque is targeted by a [magic missile](/spells/magic-missile) spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target.\n
#### Siege Monster\n
The tarrasque deals double damage to objects and structures.\n
\n
### Actions\n
#### Multiattack\n
The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite.\n
#### Bite\n
Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can’t bite another target.\n
#### Claw.\n
Melee Weapon Attack: +19 to hit, reach 15ft., one target. Hit: 28 (4d8 + 10) slashing damage.\n
#### Horns.\n
Melee Weapon Attack: +19 to hit, reach 10ft., one target. Hit: 32 (4d10 + 10) piercing damage.\n
#### Tail.\n
Melee Weapon Attack: +19 to hit, reach 20ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked [prone](/compendium/rules/basic-rules/appendix-a-conditions#Prone).\n
#### Frightful Presence.\n
Each creature of the tarrasque’s choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/compendium/rules/basic-rules/appendix-a-conditions#Frightened) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the tarrasque’s Frightful Presence for the next 24 hours.\n
#### Swallow.\n
The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite’s damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque’s turns.\n
If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.\n
\n
### Legendary Actions\n
The tarrasque can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature’s turn. The tarrasque regains spent legendary actions at the start of its turn.\n
#### Attack.\n
The tarrasque makes one claw attack or tail attack.\n
#### Move.\n
The tarrasque moves up to half its speed.\n
#### Chomp (Costs 2 Actions).\n
The tarrasque makes one bite attack or uses its Swallow.\n`;

export const skeletonRequest = async (prompt, userId, debug = true) => {
    		
  const instruction = `Create a 5e monster stat block based on the user's prompt. Return a response in a markdown format using this example. Include line breaks: ${exampleBlock}`;
  
  const messages = [
    {"role": "system", "content": `${instruction}`},
    {"role": "user", "content": `${prompt}`}
  ];



    try {
      let result = '';
      if (!debug) {
        const completion = await openai.createChatCompletion({
          model: model,
          messages: messages,
          temperature: 0,
          max_tokens: 1000
        });

        //console.log(completion.data.usage);
        //console.log(completion.data.choices[0].message.content);
  
        result = completion.data.choices[0].message.content;
      } else {
        result = `\n\n# Gary Gygax\n\n## Medium Humanoid (Human), Neutral Evil\n\n---\n\n#### Armor Class\n\n15 (Chain Mail)\n\n#### Hit Points\n\n45 (6d8 + 18)\n\n#### Speed\n\n30 ft.\n\n---\n\n| STR | DEX | CON | INT | WIS | CHA |\n| --- | --- | --- | --- | --- | --- |\n| 16 (+3) | 14 (+2) | 16 (+3) | 18 (+4) | 10 (+0) | 14 (+2) |\n---\n\n#### Saving Throws\n\nINT +7, WIS +3, CHA +5\n\n#### Skills\n\nArcana +7, History +7, Insight +3, Perception +3\n\n#### Senses\n\nPassive Perception 13\n\n#### Languages\n\nCommon, Dwarvish, Elvish, Infernal\n\n#### Challenge\n\n4 (1,100 XP)\n\n#### Proficiency Bonus\n\n+3\n\n---\n\n#### Spellcasting.\n\nGary is a 6th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). He has the following wizard spells prepared:\n\n* Cantrips (at will): [fire bolt](/spells/fire-bolt), [light](/spells/light), [mage hand](/spells/mage-hand), [prestidigitation](/spells/prestidigitation)\n* 1st level (4 slots): [charm person](/spells/charm-person), [mage armor](/spells/mage-armor), [magic missile](/spells/magic-missile), [shield](/spells/shield)\n* 2nd level (3 slots): [invisibility](/spells/invisibility), [mirror image](/spells/mirror-image), [web](/spells/web)\n* 3rd level (3 slots): [counterspell](/spells/counterspell), [dispel magic](/spells/dispel-magic), [fireball](/spells/fireball)\n\n### Actions\n\n#### Multiattack.\n\nGary makes two melee attacks.\n\n#### Dagger.\n\nMelee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 6 (1d4 + 4) piercing damage.\n\n#### Longsword.\n\nMelee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.\n\n#### Fire Bolt (1/Day).\n\nRanged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 11 (2d10) fire damage.`;
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

  // White label the result.
  result = result.replace('OpenAI', 'GamemasterAI')

  return result;
}