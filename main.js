console.log("FirstTest");
const Discord = require("discord.js");

const client = new Discord.Client();

const token = "MzQ2MzM1ODYyMTI2MDE4NTYx.DHIczA.6J2mpWP9X99QyAIVI57U2yjHcNc";

client.on("ready", () => {
  console.log("Report: Ready");

});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong! Message time: ' + client.pings[0]);
    for (let ping of client.pings) {
      console.log("ping time is: " + ping);
    }
  }
});

client.login(token);
