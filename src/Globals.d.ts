declare module "*.module.css";
declare module "*.module.scss";
declare namespace NodeJS {  export interface ProcessEnv {    HOST: string;    DB_URL: string;    DB_NAME?: string;  }}