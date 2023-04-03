const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "nowplaying",
    description: "To show the music which is currently playing in this server",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("bruh theres nothing playing in this server", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("playing", "https://media.discordapp.net/attachments/804454352713941036/869581748378402866/nithibot.gif")
      .setThumbnail(song.img)
      .setColor("BLUE")
      .addField("song name", song.title, true)
      .addField("duration", song.duration, true)
      .addField("requested by", song.req.tag, true)
      .setFooter(`views: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
}