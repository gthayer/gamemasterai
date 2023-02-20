import { Configuration, OpenAIApi } from 'openai';
import { Pinecone } from "pinecone-io";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
	
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
	console.log('test started');

	// Pinecone details.
	const API_KEY = process.env.PINECONE_API_KEY;
	if (!API_KEY) {
		console.error("API key not found! Please set PINECONE_API_KEY like this:");
		console.error("PINECONE_API_KEY=... node app.js");
		process.exit(0);
	}
	const pinecone = new Pinecone(API_KEY);

	// Collection details.
	const name = "drakkenheim";
	const schema = {
		"name":name,
		"dimension": 1536,
		"metric": "cosine"
	};

	// Create the collection if it has not been created yet.
	let collection_result = await pinecone.get_collections();
	if ( collection_result.response.length === 0 || ! collection_result.response.includes(name) ) {
		/// Create the new collection with the name and schema
		let create_result = await pinecone.create_collection(name,schema);
		if (create_result.err) {
			console.error(`ERROR:  Couldn't create collection "${name}"!`);
			console.error(create_result.err);
		} else {
			console.log(`Success! Collection "${name}" created!`);
			console.log(create_result.response);
		}

		//For a new collection, you need to wait until it's status is ready!
		console.log(`Waiting for "${name}" to be ready...`);
		let ready_result = await pinecone.wait_until_ready(name);
		console.log(`Collection "${name}" is ready!`);
	}

	// Set the host ourselves. The node packages seems to add the port 433 to the quests which prevent us from accessing it.
	if (!pinecone.host) {
		let collection_result = await pinecone.get_collection(name);
		pinecone.host = `https://${collection_result.response.status.host}/`;
	}

	const fs = require("fs");
	const { parse } = require("csv-parse");

    fs.createReadStream('./data/data.csv')
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", async function (row) {
  
		const id = `${row[0]} ${row[1]}`.toLowerCase().replace(/\W/g,'_');
        const text = `Title: ${row[0]}, Heading: ${row[1]}, ${row[2]}`;
		const visibility = row[4];
		console.log(visibility);
  
        const response = await openai.createEmbedding({
          model: "text-embedding-ada-002",
          input: text,
        });
  
        const embeddings = response.data.data[0].embedding;

		let points = [
			{ 
				"id": `drakenheim-${id}`, 
				"metadata": {
					"text": text,
					"visibility": visibility,
				}, 
				"values": embeddings 
			},
		];

		// Upload to Pinecone.
		let upload_result = await pinecone.upload_points(name,points);

		if (upload_result.err) {
			console.error(`ERROR:  Couldn't upload to "${name}"!`);
			console.error(upload_result.err);
		} else {
			console.log(`Uploaded "drakenheim-${id}" to "${name}" successfully!`);
			console.log(upload_result.response);
		}
  
      })
      .on("error", function (error) {
        console.log(error.message);
      })
      .on("end", function () {
        console.log("finished");
      });

	res.status(200).json({ result: 'test complete' });
 	console.log('test finished');
}
