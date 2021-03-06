console.log("Starting bot");

//require discord.js dependency
const Discord = require("discord.js");
console.log("discord.js successfully required");

const helpClass = require("./helpText.js");

//create the client
const client = new Discord.Client();
console.log("client successfully created");

//token for loging in
let fs = require("fs");
const token = fs.readFile("./bot.json", (err, data) => {
  JSON.parse(data, (key, value) => {
    if (key === "token") {
      client.login(value);
    }
  });
});

//other program constants
const prefix = "!";

//action for when bot is ready
client.on("ready", () => {
  console.log("Report: Ready");

  client.guilds.forEach(function(guild, id) {

    let hasOnCallRole = guild.roles.exists(function(role) {
      return role.name.toLowerCase() === "on-call";
    });
    //console.log("in a guild");

    let speakChannel = guild.channels.find(function(channel) {
      let channelPermissions = channel.permissionsFor(client.user);
      //console.log(channelPermissions);
      if (channelPermissions) {
        return channelPermissions.has("SEND_MESSAGES");
      }
      return false;
    });

    if (speakChannel) {
      speakChannel.send("This test bot has started! I'M ALIVE!");
      //speakChannel.send(
      //    "This server has an `On-call` role: " + hasOnCallRole);
    }
  });
});

//message handling
client.on("message", msg => {
  //check for bot prefix
  if (!msg.content.startsWith(prefix)) return;

  //take off the prefix, already checked for it
  msg.content = msg.content.substr(1).toLowerCase();

  //handle commands

  //ping command
  if (msg.content === "ping") {
    let originalTime = msg.createdTimestamp;
    msg.channel.send("Pong! Response time is: " + (Date.now() - originalTime));
  }

  //on-call command
  if (msg.content === "on-call") {
    let onCallRole =
        msg.guild.roles.find(role => {
          return role.name.toLowerCase() === "on-call";
        });

    if (!onCallRole) {
      msg.channel.send("Sorry, this server doesn't have an `On-call` role");
      return;
    }
    //console.log("on-call role found");
    const member = msg.guild.member(msg.author);

    //if the author is a member of the server
    if (member) {
      //console.log("author is a member of the server");
      let onCall = member.roles.find(role => {
          return role.name.toLowerCase() === "on-call";
        });

      //toggle on-call role
      if (onCall) {
        member.removeRole(onCallRole);
        msg.channel.send(member.displayName + " is no longer on call.");
      } else {
        member.addRole(onCallRole);
        msg.channel.send(member.displayName + " is now on call.");
      }
    } else {
      /*
      console.log("Message author isn't a member of the server!");
      console.log("Contents: " + msg.content);
      console.log("Author: " + msg.guild.member(msg.author).displayName);
      */
    }
  } //end on-call command

  //help command
  if (msg.content === "help") {
    let DM = msg.author.dmChannel;
    if (!DM) {
      msg.author.createDM().then(DM => DM.send(helpClass.help()));
    }
    DM.send(helpClass.help());
  }
});
