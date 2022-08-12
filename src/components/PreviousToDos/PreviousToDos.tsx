import { useEffect } from "react";
import { TextField } from "@mui/material";
import { tgUser } from "../../telegram";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchTodos } from "../../store/slices/todoSlice";

const PreviousToDos = () => {
  const dispatch = useAppDispatch();
  const { todosFromDB } = useAppSelector((state) => state.todos);
  
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  
  useEffect(() => {
    console.log("todosFromDB :>> ", todosFromDB);
  }, [dispatch, todosFromDB]);
  
  return (
    <div
      style={{
        left: "10.5%",
        width: 100,
        top: "100%",
      }}
    >
      {todosFromDB
        //?.filter((user) => user.userId === tgUser?.toString())
        .map((user) => (
          <TextField
            inputProps={{
              style: {
                width: 200,
                height: 5,
                fontFamily: "arial",
                color: "black",
              },
            }}
            value={user.title}
            key={user.userId}
          ></TextField>
        ))}{" "}
    </div>
  );
};

export default PreviousToDos;
