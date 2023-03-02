const { SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('voice')
		.setDescription('Replies with a set of choices for you to articulate and document your concern.'),
	async execute(interaction) {


		// build user interface for reporting
		const row_main_categories = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_representational')
					.setLabel('Representational')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_allocative')
					.setLabel('Allocative')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_quality_of_service')
					.setLabel('Quality of Service')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_interpersonal')
					.setLabel('Interpersonal')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_societal')
					.setLabel('Societal')
					.setStyle(ButtonStyle.Primary),
			);

		const row_representational_harms = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_stereotyping')
					.setLabel('Stereotyping')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_erasing_social_groups')
					.setLabel('Erasing Social Groups')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_alienating_social_groups')
					.setLabel('Alienating Social Groups')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_demeaning_social_groups')
					.setLabel('Demeaning Social Groups')
					.setStyle(ButtonStyle.Primary),
			);

		const row_allocative_harms = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_stereotyping')
					.setLabel('Stereotyping')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_erasing_social_groups')
					.setLabel('Erasing Social Groups')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_alienating_social_groups')
					.setLabel('Alienating Social Groups')
					.setStyle(ButtonStyle.Primary),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('btn_demeaning_social_groups')
					.setLabel('Demeaning Social Groups')
					.setStyle(ButtonStyle.Primary),
			);

		// When the user clicks on a button we want to show that specific branch of the taxonomy

		// ---- Representational harms ----
		const filter_repr = i => i.customId === 'btn_representational' && i.user.id === interaction.user.id;
		const collector_repr = interaction.channel.createMessageComponentCollector({ filter_repr, time: 15000 });

		collector_repr.on('collect', async i => {
			await i.update({ content: 'Representational harms >', components: [row_representational_harms] });
		});
		collector_repr.on('end', collected => console.log(`Collected ${collected.size} items`));

		// ---- Allocative harms ----
		// const filter_alloc= i => i.customId === 'btn_allocative' && i.user.id === interaction.user.id;
		// const collector_alloc = interaction.channel.createMessageComponentCollector({ filter_alloc, time: 15000 });

		// collector_alloc.on('collect', async i => {
		// 	await i.update({ content: 'Allocative harms >', components: [row_allocative_harms] });
		// });
		// collector_alloc.on('end', collected => console.log(`Collected ${collected.size} items`));



		await interaction.reply({ content: 'What kind of potential harm do you want to voice? No worries if you don\'t know what these are, just use your best judgment.', components: [row_main_categories] });

		 
	},
};


