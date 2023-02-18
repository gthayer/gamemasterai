import { Configuration, OpenAIApi } from 'openai';

// Open AI details.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const exampleObject = {
  "slug": "",
  "name": "",
  "size": "",
  "type": "",
  "subtype": "",
  "group": "",
  "alignment": "",
  "armor_class": "",
  "armor_desc": "",
  "hit_points": "",
  "hit_dice": "",
  "speed": {
      "walk": "",
      "burrow": "",
      "fly": ""
  },
  "strength": "",
  "dexterity": "",
  "constitution": "",
  "intelligence": "",
  "wisdom": "",
  "charisma": "",
  "strength_save": "",
  "dexterity_save": "",
  "constitution_save": "",
  "intelligence_save": "",
  "wisdom_save": "",
  "charisma_save": "",
  "perception": "",
  "skills": {
      "perception": "",
      "stealth": ""
  },
  "damage_vulnerabilities": "",
  "damage_resistances": "",
  "damage_immunities": "",
  "condition_immunities": "",
  "senses": "",
  "languages": "",
  "challenge_rating": "",
  "actions": [
      {
          "name": "",
          "desc": "",
          "attack_bonus": "",
          "damage_dice": "",
          "damage_bonus": ""
      }
  ],
  "reactions": "",
  "legendary_desc": "",
  "legendary_actions": [
      {
          "name": "",
          "desc": ""
      }
  ],
  "special_abilities": [
      {
          "name": "",
          "desc": "",
          "spellcasting": {
              "level": "",
              "ability": {
                  "name": "",
              },
              "dc": "",
              "modifier": "",
              "slots": {
                  "1": "",
                  "2": "",
                  "3": "",
                  "4": "",
                  "5": "",
                  "6": "",
                  "7": "",
                  "8": "",
                  "9": ""
              },
              "spells": [
                  {
                      "name": "",
                      "level": "",
                  },
                  {
                      "name": "",
                      "level": "",
                  }
              ]
          }
      }
  ],
};

function cleanResult(result) {
  result = result.split('###')[0];
  console.log(result);
  return JSON.parse(result);
}

export default async function (req, res) {

    // const prompt = `Create a 5e monster stat block based on the user's prompt. Return a response in a JSON object using the following structure:\
    // \
    // \`\`\`\
    // ${exampleObject}
    // \`\`\`\
    // \
    // Prompt: ${req.body.description}\
    // Stat Block: `;

    const prompt = `${req.body.description} -> `;

    try {
      // const completion = await openai.createCompletion({
      //   model: 'davinci:ft-personal:monsterfinetunedavinciv1-2023-02-18-17-42-14',
      //   prompt: prompt,
      //   temperature: 0,
      //   max_tokens: 1950
      // });

      //let result = completion.data.choices[0].text;
      let result = ` {"slug":"cool-guy","name":"Cool Guy","size":"Medium","type":"humanoid","subtype":"any race","group":null,"alignment":"any alignment","armor_class":12,"armor_desc":"leather armor","hit_points":16,"hit_dice":"3d8","speed":{"walk":30},"strength":10,"dexterity":14,"constitution":12,"intelligence":11,"wisdom":10,"charisma":15,"strength_save":null,"dexterity_save":null,"constitution_save":null,"intelligence_save":null,"wisdom_save":null,"charisma_save":null,"perception":null,"skills":{"deception":5,"insight":2,"persuasion":5},"damage_vulnerabilities":"","damage_resistances":"","damage_immunities":"","condition_immunities":"","senses":"passive Perception 10","languages":"any two languages","challenge_rating":"1/8","actions":[{"name":"Multiattack","desc":"The cool guy makes two melee attacks."},{"name":"Rapier","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 2) piercing damage.","attack_bonus":4,"damage_dice":"1d8","damage_bonus":2},{"name":"Sling","desc":"Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.","attack_bonus":4,"damage_dice":"1d4","damage_bonus":2}],"reactions":"","legendary_desc":"","legendary_actions":"","special_abilities":[{"name":"Evasive","desc":"The cool guy can take the Disengage or Hide action as a bonus action on each of his turns."},{"name":"Taunt","desc":"As a bonus action, the cool guy can taunt a creature he can see within 30 feet of him. A taunted creature must make a Wisdom saving throw (DC 10 + the cool guy's proficiency bonus + the cool guy's Charisma modifier) against being frightened of the cool guy. If the save fails by 5 or more, the target is frightened until the end of the cool guy's next turn. If the save succeeds, the target is not frightened and is immune to the cool guy's Taunt for 24 hours."}],"spell_list":[],"img_main":null,"document__slug":"wotc-srd","document__title":"Systems Reference Document","document__license_url":"http://open5e.com/legal"}### _____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ `;
      
      result = cleanResult(result);

      res.status(200).json(result);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
}
