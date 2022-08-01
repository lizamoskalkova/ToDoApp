import { config as configDotenv } from "dotenv";


const { Telegraf } = require('telegraf'); 
const token = process.env.REACT_APP_TOKEN;
const web_link = process.env.REACT_APP_WEB_LINK;

if (process.env.NODE_ENV != "production") configDotenv();

if (!token) {
    console.error("Please provide token");

    process.exit(1);
}

if (!web_link) {
    console.log("Please provide url");

    process.exit(1);
}

const bot = new Telegraf(token);
bot.start(ctx =>
    ctx.reply("Please enter your coolest task into the App!")
);
bot.launch();


