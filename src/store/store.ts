import { makeAutoObservable } from "mobx";
import { ITodo } from "../data/data";


class Store {
    todos: ITodo[] = [];
    newToDo: string = "";

    constructor () {
        makeAutoObservable(this);
    }
    addToDo() {
        this.newToDo = "";
    }
}

const store = new Store();

export default store;