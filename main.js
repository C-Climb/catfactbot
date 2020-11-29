require('dotenv').config()
const Discord = require("discord.js");
const client = new Discord.Client()
const fetch = require("node-fetch")


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})



client.on("message", msg => {
    if (msg.content === '>catfact') {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => msg.channel.send(data[0].url))
            .catch(error => {
                msg.reply("Something went wrong when fetching cat fact image.")
            })
        fetch("https://cat-fact.herokuapp.com/facts/random")
            .then(response => response.json())
            .then(data => msg.reply(data.text))
            .catch(error => {
                msg.reply("Something went wrong when fetching cat facts.")
            })
      }
    if(msg.content === '>dogfact'){
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => msg.channel.send(data.message))
            .catch(error => msg.reply("Something went wrong when fetching dog fact image."))
        fetch("https://dog-api.kinduff.com/api/facts")
            .then(response => response.json())
            .then(data => msg.reply(data.facts[0]))
            .catch(msg.reply("Somethgin went wrong when fetching dog facts."))
    }
    if(msg.content === '>climbfact'){
        msg.reply("He doesnt exist stop asking.")
    }
})

client.login(process.env.TOKEN);