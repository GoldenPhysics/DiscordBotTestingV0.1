console.log("Starting bot");

//require discord.js dependency
const Discord = require("discord.js");
console.log("discord.js successfully required")

//create the client
const client = new Discord.Client();
console.log("client successfully created");

//token for loging in
const token = "MzQ2MzM1ODYyMTI2MDE4NTYx.DHIczA.6J2mpWP9X99QyAIVI57U2yjHcNc";

//other program constants
const prefix = "!";

//action for when bot is ready
client.on("ready", () => {
  console.log("Report: Ready");

});

//message handling
client.on("message", msg => {
  if (msg.content.startsWith() !== prefix) return;
  msg.content = msg.content.substr(1);
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

//login
client.login(token);
