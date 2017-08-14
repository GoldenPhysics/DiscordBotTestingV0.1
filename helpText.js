const helpIntro = "This help command posts a list of commands.\
    This list is not necessarily complete or acurate.\
    Some commands may not yet be implemented.\n\n";

blockQuote = function(str) {
  return ("```\n" + str + "\n```");
}

exports.help = function() {
  return blockQuote(helpIntro +
      "Bot Admin commands:\
      !help public (not implemented):\
        displays this help text in the channel the request was made from.\
      \
      Bot User Commands:\
      !help (not implemented):\
        Sends the user this help text in a direct message\
      !ping:\
        Bot replys \"Pong!\" and the time it took to reply.\
      !on-call:\
        Toggles the on-call role for the command sender.\
        Only works if the server has a role called \"On-call\"."))
}
