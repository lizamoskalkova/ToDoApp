import { TelegramWebApps } from "telegram-webapps-types";

export const tg: TelegramWebApps.WebApp = Telegram.WebApp;

tg.expand();
export const tgUser = tg.initDataUnsafe.user?.id;
export const tgThemeParams = tg.themeParams;
export const tgUserName = tg.initDataUnsafe.user?.first_name;
