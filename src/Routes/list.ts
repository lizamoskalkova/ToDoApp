import ActualToDos from "../components/ActualToDos";
import Home from "../components/Home";
import PreviousToDos from "../components/PreviousToDos";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
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
