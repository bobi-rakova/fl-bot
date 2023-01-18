const { SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('voice')
		.setDescription('Replies with a set of choices for you to articulate and document your concern.'),
	async execute(interaction) {


		// build user interface for reporting
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn1')
					.setLabel('discrimination, hate speech and exclusion')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn2')
					.setLabel('information hazards')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn3')
					.setLabel('misinformation')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn4')
					.setLabel('malicious uses')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn5')
					.setLabel('human-computer interaction harms')
					.setStyle(ButtonStyle.Primary),
			);

		await interaction.reply({ content: 'What would you want to voice?', components: [row] });
		 
	},
};
