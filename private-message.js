module.exports = (bot, triggerText, replyText) => {
  bot.on('message', (message) => {
    if (
      message.channel.type === 'dm' &&
      message.content.toLowerCase() === triggerText.toLowerCase()
    ) {
      message.author.send(replyText)
    }
  })
}
