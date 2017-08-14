const helpIntro = "This help command posts a list of commands.\n\
    This list is not necessarily complete or acurate.\n\
    Some commands may not yet be implemented.\n\n";

blockQuote = function(str) {
  return ("```\n" + str + "\n```");
}

exports.help = function() {
  return blockQuote(helpIntro +
      "Bot Admin commands:\n\
      !help public (not implemented):\n\
        \tdisplays this help text in the channel the request was made from.\n\
      \n\
      Bot User Commands:\n\
      !help (not implemented):\n\
        \tSends the user this help text in a direct message\n\
      !ping:\n\
        \tBot replys \"Pong!\" and the time it took to reply.\n\
      !on-call:\n\
        \tToggles the on-call role for the command sender.\n\
        \tOnly works if the server has a role called \"On-call\".")
}
