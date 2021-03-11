import { StatusBar } from "expo-status-bar";
import React from "react";

import Routes from "./src/Routes";

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
};

export default App;
