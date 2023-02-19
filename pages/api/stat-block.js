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
      const completion = await openai.createCompletion({
        model: 'davinci:ft-personal:monsterfinetunedavinciv1-2023-02-18-17-42-14',
        prompt: prompt,
        temperature: 0.6,
        max_tokens: 1950
      });

      let result = completion.data.choices[0].text;

      //let result = ` {"slug":"cool-guy","name":"Cool Guy","size":"Medium","type":"humanoid","subtype":"any race","group":null,"alignment":"any alignment","armor_class":12,"armor_desc":"leather armor","hit_points":16,"hit_dice":"3d8","speed":{"walk":30},"strength":10,"dexterity":14,"constitution":12,"intelligence":11,"wisdom":10,"charisma":15,"strength_save":null,"dexterity_save":null,"constitution_save":null,"intelligence_save":null,"wisdom_save":null,"charisma_save":null,"perception":null,"skills":{"deception":5,"insight":2,"persuasion":5},"damage_vulnerabilities":"","damage_resistances":"","damage_immunities":"","condition_immunities":"","senses":"passive Perception 10","languages":"any two languages","challenge_rating":"1/8","actions":[{"name":"Multiattack","desc":"The cool guy makes two melee attacks."},{"name":"Rapier","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 2) piercing damage.","attack_bonus":4,"damage_dice":"1d8","damage_bonus":2},{"name":"Sling","desc":"Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.","attack_bonus":4,"damage_dice":"1d4","damage_bonus":2}],"reactions":"","legendary_desc":"","legendary_actions":"","special_abilities":[{"name":"Evasive","desc":"The cool guy can take the Disengage or Hide action as a bonus action on each of his turns."},{"name":"Taunt","desc":"As a bonus action, the cool guy can taunt a creature he can see within 30 feet of him. A taunted creature must make a Wisdom saving throw (DC 10 + the cool guy's proficiency bonus + the cool guy's Charisma modifier) against being frightened of the cool guy. If the save fails by 5 or more, the target is frightened until the end of the cool guy's next turn. If the save succeeds, the target is not frightened and is immune to the cool guy's Taunt for 24 hours."}],"spell_list":[],"img_main":null,"document__slug":"wotc-srd","document__title":"Systems Reference Document","document__license_url":"http://open5e.com/legal"}### _____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ `;
      //let result = ` {"slug":"tarrasque","name":"Tarrasque","size":"Gargantuan","type":"monstrosity","subtype":"","group":null,"alignment":"unaligned","armor_class":25,"armor_desc":"natural armor","hit_points":480,"hit_dice":"24d20+240","speed":{"walk":40,"burrow":30,"climb":30},"strength":30,"dexterity":10,"constitution":30,"intelligence":3,"wisdom":10,"charisma":7,"strength_save":null,"dexterity_save":null,"constitution_save":null,"intelligence_save":null,"wisdom_save":null,"charisma_save":null,"perception":null,"skills":{},"damage_vulnerabilities":"","damage_resistances":"","damage_immunities":"fire, poison","condition_immunities":"","senses":"blindsight 60 ft., passive Perception 10","languages":"","challenge_rating":"24","actions":[{"name":"Multiattack","desc":"The tarrasque can use its Frightful Presence. It then makes three attacks: one with its bite, one with its claws, and one with its tail. It can use its Swallow instead of its bite."},{"name":"Bite","desc":"Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target.","attack_bonus":19,"damage_dice":"4d12","damage_bonus":10},{"name":"Claws","desc":"Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 24 (4d6 + 10) slashing damage.","attack_bonus":19,"damage_dice":"4d6","damage_bonus":10},{"name":"Tail","desc":"Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage.","attack_bonus":19,"damage_dice":"4d6","damage_bonus":10},{"name":"Frightful Presence","desc":"Each creature of the tarrasque's choice that is within 120 ft. of the tarrasque and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."},{"name":"Swallow","desc":"The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 ft. of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 10 ft. of movement, exiting prone."}],"reactions":"","legendary_desc":"","legendary_actions":"","special_abilities":[{"name":"Fire Breath","desc":"The tarrasque exhales fire in a 60-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 99 (26d6) fire damage on a failed save, or half as much damage on a successful one.","attack_bonus":0,"damage_dice":"26d6"}],"spell_list":[],"img_main":null,"document__slug":"wotc-srd","document__title":"Systems Reference Document","document__license_url":"http://open5e.com/legal"} `;
      //let result = ` {"slug":"demon","name":"Demon","size":"Large","type":"fiend","subtype":"","group":"Demons","alignment":"chaotic evil","armor_class":18,"armor_desc":"natural armor","hit_points":182,"hit_dice":"16d10+80","speed":{"walk":40,"fly":60},"strength":22,"dexterity":16,"constitution":20,"intelligence":16,"wisdom":14,"charisma":21,"strength_save":null,"dexterity_save":6,"constitution_save":9,"intelligence_save":null,"wisdom_save":5,"charisma_save":9,"perception":6,"skills":{"deception":9,"insight":6,"perception":6,"stealth":6},"damage_vulnerabilities":"","damage_resistances":"","damage_immunities":"acid, cold, fire, lightning, poison; bludgeoning, piercing, and slashing from nonmagical attacks","condition_immunities":"charmed, frightened, poisoned","senses":"truesight 120 ft., passive Perception 16","languages":"Abyssal, telepathy 120 ft., telepathy 120 ft.","challenge_rating":"16","actions":[{"name":"Multiattack","desc":"The demon makes two attacks: one with its bite and one with its claws or spear."},{"name":"Bite","desc":"Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) piercing damage plus 7 (2d6) poison damage.","attack_bonus":11,"damage_dice":"2d10+2d6","damage_bonus":5},{"name":"Claws","desc":"Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 5) slashing damage.","attack_bonus":11,"damage_dice":"2d8","damage_bonus":5},{"name":"Spear","desc":"Melee or Ranged Weapon Attack: +11 to hit, reach 10 ft. or range 20/60 ft., one target. Hit: 15 (2d8 + 7) piercing damage, or 12 (2d6 + 7) piercing damage if used with two hands to make a melee attack.","attack_bonus":11,"damage_dice":"2d8","damage_bonus":7},{"name":"Poison","desc":"The target must make a DC 17 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.","attack_bonus":0,"damage_dice":"12d6"}],"reactions":"","legendary_desc":"","legendary_actions":"","special_abilities":[{"name":"Telepathy","desc":"The demon can magically transmit its thoughts to other creatures within 120 ft. of it. It is able to detect the presence of willing creatures up to 120 ft. away."}],"spell_list":[],"img_main":null,"document__slug":"wotc-srd","document__title":"Systems Reference Document","document__license_url":"http://open5e.com/legal"} `;

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
