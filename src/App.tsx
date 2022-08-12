import { store } from "./store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { tgUserName } from "./telegram";
import Home from "./components/Home";

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    tgUserName ? setCurrentUser(tgUserName) : setCurrentUser("DEV");
  }, []);

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
