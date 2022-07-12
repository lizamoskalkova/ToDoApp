const { Telegraf } = require('telegraf')
const TOKEN = '5176697287:AAFZMyO6zBxllSbW_YBtpH8BA6MdLbbY8zg'

const bot = new Telegraf(TOKEN)
bot.start((ctx: { reply: (arg0: string) => any }) => ctx.reply('Welcome'))
bot.launch()

export {}