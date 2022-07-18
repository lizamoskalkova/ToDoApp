var Telegraf = require("telegraf").Telegraf;
var token = '5581809099:AAH21cx-eIWPaAXDsMDCrZiEcsk9i4pOM_g';
var bot = new Telegraf(token);
var web_link = 'https://to-do-app2-delta.vercel.app/';
bot.start(function (ctx) { return ctx.reply("Hey fff", { reply_markup: { keyboard: [[{ text: 'web app', web_app: { url: web_link } }]] }
}); });
bot.launch();
