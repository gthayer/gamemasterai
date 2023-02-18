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

    const prompt = req.body.description;

    try {
      const completion = await openai.createCompletion({
        model: 'curie:ft-personal-2023-02-17-03-53-50',
        prompt: prompt,
        temperature: 0,
        max_tokens: 1950
      });
      
      const result = cleanResult(completion.data.choices[0].text);

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
