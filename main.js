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

  client.guilds.forEach(function(guild, id) {
    console.log("testing");
    guild.defaultChannel.send("This test bot has started! I'M ALIVE!")
  });
});

//message handling
client.on("message", msg => {
  //check for bot prefix
  if (!msg.content.startsWith(prefix)) return;

  //take off the prefix, already checked for it
  msg.content = msg.content.substr(1);

  //handle commands

  //ping command
  if (msg.content === "ping") {
    let originalTime = msg.createdTimestamp;
    msg.channel.send("Pong! Response time is: " + (Date.now() - originalTime));
  }
});

//login
client.login(token);
