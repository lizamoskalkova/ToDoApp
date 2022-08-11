import ActualToDos from "../Components/ActualToDos/ActualToDos";
import Home from "../Home/Home";
import PreviousToDos from "../Components/PreviousToDos/PreviousToDos";

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
