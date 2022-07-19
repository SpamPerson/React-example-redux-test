import React from "react";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import Test from "./components/Test";

export const App: React.FC = () => {
   return (
      <Provider store={appStore}>
         <Test />
      </Provider>
   );
};
