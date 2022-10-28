const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('new')
		.setDescription('Start a new writing session.'),
	async execute(interaction) {
		// reinitialize GPT3 prompt
		interaction.client.story_prompt = "";
		await interaction.reply('Starting a new writing session.');
	},
};