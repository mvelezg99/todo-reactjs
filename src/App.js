import React, { Fragment } from "react";

import Header from "./components/global/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="App">
        {/* <h1>TODO React Application</h1> */}
        <Home />
      </div>
      
    </Fragment>
  );
}

export default App;
