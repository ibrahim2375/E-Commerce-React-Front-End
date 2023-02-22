import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//redux
import { PersistGate } from "redux-persist/integration/react";
import { store, Persistor } from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
