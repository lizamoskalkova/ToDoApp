import { makeAutoObservable, observable } from "mobx";
import { ITodo } from "../data/data";
import { database } from "../icandev";

class TodoStore {
    



}
const store = new TodoStore();
export default store;

console.log(database.table('taskdata').getPage(1,1000));


