import { Telegraf, Telegram } from "telegraf";

const token = '5581809099:AAH21cx-eIWPaAXDsMDCrZiEcsk9i4pOM_g';
const bot = new Telegraf(token);

const web_link = 'https://2ff4db87-e830-4de6-835c-5fd545d3e5cb.i-can.dev/';

bot.start((ctx) => 
    ctx.reply("Please enter your task into the App!", {
        reply_markup: {
            inline_keyboard: [[{ text: "Todo", web_app: {url: web_link} }]]
        },
    })
);

bot.launch();


