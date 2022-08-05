import { makeAutoObservable, runInAction } from "mobx";
import { database } from "../icandev";


export class TableData {

    public constructor() {
        makeAutoObservable(this);
        this.retrieveData();
    }

    public async retrieveData() {
        const pageData = await database.table('taskdata').getPage(1, 1000);

        if (!pageData) return;

        runInAction(() => {
        for (const row of pageData.rows) {
            
            console.log(row.data.user_id)
        }
        
        });
        //console.log(pageData.rows[0].data.user_id)
    }
}

