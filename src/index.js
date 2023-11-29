require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online ✨`)
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName ==='hey') {
        interaction.reply('hey!')
    }
    if (interaction.commandName ==='ping') {
        interaction.reply('pong!')
    }
    if (interaction.commandName ==='bing') {
        interaction.reply('bong!')
    }
    if (interaction.commandName ==='pong') {
        interaction.reply('you did it wrong!')
    }
    if (interaction.commandName ==='bong') {
        interaction.reply('noun. a type of water pipe for smoking marijuana, crack, etc.')
    }
    console.log(interaction.commandName);
})


client.login(process.env.TOKEN);