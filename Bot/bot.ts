const { Telegraf} = require("telegraf");
const token = '5581809099:AAH21cx-eIWPaAXDsMDCrZiEcsk9i4pOM_g';
const bot = new Telegraf(token);

const web_link = 'https://to-do-app2-delta.vercel.app/';

bot.start((ctx: { reply: (arg0: string, arg1: { reply_markup: { keyboard: { text: string; web_app: { url: string; }; }[][]; }; }) => any; }) =>
    ctx.reply("Hello world!", {
        reply_markup: {
            keyboard: [[{ text: "Todo", web_app: { url: web_link } }]],
        },
    })
);

bot.launch();

