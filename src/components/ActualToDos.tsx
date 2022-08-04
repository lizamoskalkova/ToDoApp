import React, { FC } from "react"
import { database } from "../icandev";

const ActualToDos: FC = () => {

    const pageData= database.table('taskdata').getPage(1,1000);
    
        //console.log(pageData.rows[0].data.user_id)
    return (
    <div> ssslmklkmlkm</div>
    )
}
//console.log(database.table('taskdata').getPage(1,1000).rows.data);

export default ActualToDos;