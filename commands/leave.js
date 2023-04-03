const discord = require("discord.js");

module.exports = {
    info: {
        name: "leave",
        description: "Leaves the voice channel of the messenger",
        usage: "[leave]",
        aliases: ["l"],
    },

    run: async function (client, message, args) {
        let embed = new discord.MessageEmbed()
        .setDescription("cya lol")
        .setColor("YELLOW")
        .setFooter(`requested by ${message.author.username} L`)
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send("you need to be in a voice channel");

        await voiceChannel.leave();
        await message.channel.send(embed);
    }
}