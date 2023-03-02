


const { clientId, guildId, BOT_TOKEN, OPENAI_API_KEY } = require('./config.json');

require('dotenv').config();

// Require the necessary discord.js classes
const { Client, Collection, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const token = BOT_TOKEN;
const openai = new OpenAIApi(configuration);

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

const fs = require('node:fs');
const path = require('node:path');
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


// Buttons
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

   	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

});


// // OpenAI GPT3 prompt
// client.story_prompt = "";


// client.on("messageCreate", function(message) {
// 	// checks to see if the author of a message is a bot
//    if (message.author.bot) return;  

//    client.story_prompt += `${message.content}\n`;
//   (async () => {
//         const gptResponse = await openai.createCompletion({
//             model: "text-davinci-002",
//             prompt: client.story_prompt,
//             max_tokens: 1800,
//             temperature: 0.9,
//             top_p: 0.3,
//             presence_penalty: 0,
//             frequency_penalty: 0.5,
//           });
//         message.reply(`${gptResponse.data.choices[0].text}`);
//         //message.reply(`${gptResponse.data.choices[0].text.substring(5)}`);

//         // save to the interaction.client object
//         // future calls to the GPT3 API willl use this updated prompt
//         client.story_prompt += `${gptResponse.data.choices[0].text}\n`;
//     })();
// });  

// Login to Discord with your client's token
client.login(token);
