import { Home } from "@mui/icons-material";
import ActualToDos from "../components/ActualToDos";
import App from "../components/App";
import PreviousToDos from "../components/PreviousToDos";

export const routes = [
  {
    path: "/",
    exact: true,
    component: App,
  },
  {
    path: "/PreviousToDos",
    exact: true,
    component: PreviousToDos,
  },
  {
    path: "/ActualToDos",
    exact: true,
    component: ActualToDos,
  },
];
