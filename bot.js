const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598999146770333700")
setInterval(function() {
channel.send(`test test test test test test`);
}, 30)
})

client.login(process.env.BOT_TOKEN);