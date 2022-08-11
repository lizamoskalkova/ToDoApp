import { useEffect, useState } from "react";
import { Row } from "icandev-js-sdk";
import { TextField } from "@mui/material";
import { tgUser } from "../../telegram";

const PreviousToDos = () => {
  const [userData, setUserData] = useState<Row[] | null>(null);

  useEffect(() => {
    console.log(userData?.[0].data.title);
    //useDispatch({fetchTodos()});
  }, []);

  return (
    <div
      style={{
        left: "10.5%",
        width: 100,
        top: "100%",
      }}
    >
      {userData
        ?.filter((user) => user.data.user_id === tgUser?.toString())
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
            value={user.data.title}
            key={user.data.id}
          ></TextField>
        ))}{" "}
    </div>
  );
};

export default PreviousToDos;
//console.log(database.table('taskdata').getPage(1,1000).rows.data);
