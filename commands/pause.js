const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "pause",
    description: "To pause the current music in the server",
    usage: "[pause]",
    aliases: ["pause"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: the player has stopped the queue has cleared F: ${error}`, message.channel);
      }	    
      let xd = new MessageEmbed()
      .setDescription("⏸ i paused the music for u gg")
      .setColor("YELLOW")
      .setTitle("Music has been paused!")
      return message.channel.send(xd);
    }
    return sendError("bruh theres nothing playing in this server", message.channel);
  },
};