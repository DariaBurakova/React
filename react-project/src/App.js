import React from "react";
import {Provider} from "react-redux";
import './components/Route/router.css';
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {Router} from "./components/Route/Router";

function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
    <Router/>
          </PersistGate>
      </Provider>
  );
}

export default App;
