import {goblinRequest} from '../../lib/modelRequests/goblin';
import {skeletonRequest} from '../../lib/modelRequests/skeleton';
import {createStatBlock} from '../../lib/database/StatBlock';

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

export default async function (req, res) {
  
    let result = null;

    switch (req.body.model) {
        case 'skeleton':
            result = await skeletonRequest(req.body.description, req.body.debug);
            break;
       
        case 'goblin':
        default:
            result = await goblinRequest(req.body.description, req.body.debug);
            break;
    }

    createStatBlock(req.body.description, result);

    res.status(200).json(result);
}
