const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('save')
		.setDescription('Save your current writing session.'),
	async execute(interaction) {
		console.log("*** save_session command ***")
		console.log(interaction.client.story_prompt);
		
		await interaction.reply('Saved');
	},
};