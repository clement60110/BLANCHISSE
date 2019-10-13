const Discord = require("discord.js")

const client = new Discord.Client()

let prefix = "/"

client.login("NjMyODY0NDE2MjkxMDk0NTI5.XaMlSg.28EPREM_ctgnBR8-FkUtJzH-Gow")


client.on("ready", () => {
    console.log("connecté !")

})

client.on("message", message => {
    if(message.content === prefix + "besoin d'un blanchisseur"){
        message.reply("je t'envoie quequ'un")
    }
})
