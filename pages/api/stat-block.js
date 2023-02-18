import { Configuration, OpenAIApi } from 'openai';

// Open AI details.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {

    // let prompt = `${req.body.question} -> `;
    let prompt = `${req.body.question}`;

  console.log(prompt);

    try {
      const completion = await openai.createCompletion({
        model: 'curie:ft-personal-2023-02-17-03-53-50',
        prompt: prompt,
        //temperature: 0,
        top_p: 1,
        max_tokens: 1950
      });
      //console.log(completion);
      res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
}
