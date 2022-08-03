import { config as configDotenv } from "dotenv";


const { Telegraf } = require('telegraf'); 
const token = process.env.REACT_APP_TOKEN;

const web_link = process.env.REACT_APP_WEB_LINK;
const token1 = '5581809099:AAH21cx-eIWPaAXDsMDCrZiEcsk9i4pOM_g'
const web_link1 = 'https://vercel.com/lizamoskalkova/to-do-app2'

if (process.env.NODE_ENV != "production") configDotenv();

if (!token1) {
    console.error("Please provide token");

    process.exit(1);
}

if (!web_link1) {
    console.log("Please provide url");

    process.exit(1);
}

const bot = new Telegraf(token1);
bot.start(ctx =>
    ctx.reply("Please enter your coolest task into the App!")
);
bot.launch();


