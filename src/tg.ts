import { TelegramWebApps} from "telegram-webapps-types";


export const tg: TelegramWebApps.WebApp = Telegram.WebApp;
tg.expand();
export const tgUserInfo = tg.initDataUnsafe.user;
export const tgMainButton = tg.MainButton.setText('Hello');
export const tgThemeParams = tg.themeParams;
