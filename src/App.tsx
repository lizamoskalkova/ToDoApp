import { store } from "./store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { tgUserName } from "./telegram";
import Home from "./components/Home";

function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
