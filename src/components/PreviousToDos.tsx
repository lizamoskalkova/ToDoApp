import { FC, useEffect, useState } from "react";
import { database } from "../icandev";
import { Row } from "icandev-js-sdk";
import { TextField, Typography } from "@mui/material";

const PreviousToDos = () => {
  const [userData, setUserData] = useState<Row[] | null>(null);
  let b = "";
  useEffect(() => {
    (async () => {
      const a = await database.table("taskdata").getPage(1, 1000);
      if (!a) return;
      setUserData(a.rows);
      for (const row of a.rows) {
        //setUserData(row.data.user_id);
        console.log(b);
      }
    })();
  }, []);
  console.log(userData?.[0].data.title);

  return (
    <div
      style={{
        left: "10.5%",
        width: 100,
        top: "100%",
      }}
    >
      {userData
        ?.filter(
          (user) =>
            user.data.user_id ===
            String(Telegram.WebApp.initDataUnsafe.user?.id)
        )
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
