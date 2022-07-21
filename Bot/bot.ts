const { Telegraf} = require("telegraf");
const token = '5581809099:AAH21cx-eIWPaAXDsMDCrZiEcsk9i4pOM_g';
const bot = new Telegraf(token);

const web_link = 'https://2ff4db87-e830-4de6-835c-5fd545d3e5cb.i-can.dev/';

bot.start((ctx: { reply: (arg0: string, arg1: { reply_markup: { keyboard: { text: string; web_app: { url: string; }; }[][]; }; }) => any; }) =>
    ctx.reply("Please enter your task into the App!", {
        reply_markup: {
            keyboard: [[{ text: "Todo", web_app: { url: web_link } }]],
        },
    })
);

bot.launch();

