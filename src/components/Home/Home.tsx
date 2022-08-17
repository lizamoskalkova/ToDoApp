import { useAppSelector } from "../../store";
import PreviousToDos from "../PreviousToDos";
import Header from "../Header";
import ToDoPage from "../ToDoPage";

const Home: React.FC = () => {

const { previousTasks } = useAppSelector((state) => state);
console.log(previousTasks);

if (!previousTasks) 
{ 
  return (
    <>
     <Header/>
      <ToDoPage/>
    </>
  );
}
  return (
  <>
    <Header/>
      <PreviousToDos/>
  </>
  );
};

export default Home;
