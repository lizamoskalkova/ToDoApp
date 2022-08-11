import Routes from "./Routes/Routes";
import { store } from "./store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { tgUserName } from "./telegram";

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    tgUserName ? setCurrentUser(tgUserName) : setCurrentUser("DEV");
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
