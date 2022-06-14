const { sendHelp } = require('./commands')

function onClientMessage(message) {
  // if the message isnt meant for this bot then ignore it
  if (message.content.substring(0, 1) !== '~') {
    return
  }

  const commandArguments = message.content.toLowerCase().split(' ')
  if (commandArguments.length < 1) {
    message.channel.send('Command Not Found.')
  }

  switch (commandArguments[0]) {
    case '~listen':
      // Join the voice channel and start transcribing
      break;
    case '~help':
      sendHelp(message)
      break;
    default:
      message.channel.send('Command Not Found.')
  }
}

exports.onClientMessage = onClientMessage
