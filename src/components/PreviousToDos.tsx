import React, { FC } from "react"
import { database } from "../icandev";
import { makeAutoObservable, runInAction } from "mobx";
import { TableData } from "../store/store";


const PreviousToDos = () => {
  
    return (
    <div>PreviousToDos</div>
  )
}

export default PreviousToDos
//console.log(database.table('taskdata').getPage(1,1000).rows.data);
