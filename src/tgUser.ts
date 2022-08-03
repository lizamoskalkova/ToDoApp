import { makeAutoObservable } from "mobx";

export class UserData {
    avatarLink?: string;

    constructor() {
        makeAutoObservable(this);

        this.getAvatar();
    }

    get _avatarLink() {
        return this.avatarLink;
    }

    async getAvatar() {
        const response = await fetch("https://cuad.ask.fm/69a/21863/3e8d/4985/a0c3/5f10902fa380/normal/1218860.jpg");

        const { url }: { url: string } = await response.json();

        this.avatarLink = url;
    }
}

export const user = new UserData();