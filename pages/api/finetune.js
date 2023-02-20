import { Configuration, OpenAIApi } from 'openai';
const fs = require('fs');


const name = 'monsterFinetuneCurieV2-epoch4';
const defaultEndpoint = 'https://api.open5e.com/monsters/?format=json';
const folderPath = `/Users/garythayer/Desktop/openai-quickstart-node/data`;
const trainingFile = `${folderPath}/${name}-train.jsonl`;
const testingFile = `${folderPath}/${name}-test.jsonl`;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
	
const openai = new OpenAIApi(configuration);

const parseMonster = (monster) => {

	let filePath = ''
	if ( Math.random() < 0.5 ) {
		filePath = trainingFile;
	} else {
		filePath = testingFile;
	}


	let row = {
		prompt: `${monster.name} -> `,
		completion: ` ${JSON.stringify(monster)}### `,
	};

	fs.appendFile(filePath, JSON.stringify(row) + '\n', err => {
		if (err) {
		  console.error(err);
		}
	});
}

const fetchData = async (endpoint = '') => {
	// Get the first fetch.
	const response = await fetch(endpoint);
	const data = await response.json();

	// Write the first fetch to the file.
	data.results.forEach(monster => {
		parseMonster(monster);
	});

	if ( data.next ) {
		// Wait for the file to be written.
		console.log('Waiting for file to be written...');
		return fetchData(data.next);
	} else {
		console.log('No more data to fetch.');
		return true;
	}
}

const sendFile = async (filePath) => {
	const response = await openai.createFile(
	  fs.createReadStream(filePath),
	  'fine-tune'
	);

	return response;
}

const sendFinetune = async (training_file, validation_file) => {
	try {
		const response = await openai.createFineTune({
			training_file: training_file,
			validation_file: validation_file,
			model: 'curie',
			suffix: name,
			n_epochs: 1,
		});

		
		console.log(`Watch with: openai api fine_tunes.follow -i ${response.data.id}`);
	} catch (error) {
		console.log(error);
	}
}

export default async function (req, res) {
	console.log('Finetune started');

	console.log('Deleting finetunes files...');
	// fs.unlink(trainingFile, (err) => {
	// 	if (err) {
	// 		console.error(err);
	// 	  }
	// });
	// fs.unlink(testingFile, (err) => {
	// 	if (err) {
	// 		console.error(err);
	// 	  }
	// });

	// // Get the first fetch.
	// const resp = await fetchData(defaultEndpoint);

	// if (resp) {
	// 	const trainingFileResp = await sendFile(trainingFile);
	// 	const testingFileResp = await sendFile(testingFile);

	// 	if (trainingFileResp.data.id && testingFileResp.data.id) {
	// 		sendFinetune(trainingFileResp.data.id, testingFileResp.data.id);
	// 	}
	// }

	sendFinetune('file-bLQFo1P2uWddFAmFp39izRcV', 'file-jm6rJ6mgXkwsLK4UuURfI6ls');

	res.status(200).json({result: 'Finetune complete'});
 	console.log('Finetune complete');
}
