import React, { Fragment } from "react";

import Header from "./components/global/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="App">
        <Home />
      </div>
      
    </Fragment>
  );
}

export default App;
