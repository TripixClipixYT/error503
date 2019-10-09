const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const { prefix } = require("../../botconfig.json");

module.exports = {
    config: {
        name: "request",
        description: "Request a role",
        usage: `${prefix}request`,
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["req"]
    },
    run: async (bot, message, args) => {
    let rqChannel = message.guild.channels.find(x => x.name === "role-request")
    let roleargs = args.slice(1).join(" ") || message.mentions.roles.first()
    // let rqrole = message.guild.roles.find(r => r.name === roleargs)
    // if(!roleargs) return message.reply("You need to type or tag a role!")
    let rqEmbed = new RichEmbed()
        .setColor(cyan)
        .setTitle("Role Request")
        .setThumbnail(message.guild.iconURL)
        .addField(`New Role Request by **${message.author.tag}**`, `Requested role:\n${roleargs}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL);
    rqChannel.send(rqEmbed).then(m => {
        m.react("✅")
        m.react("❌")
    })
    }
}