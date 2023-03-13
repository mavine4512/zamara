import React from "react";

import reducer from "./src/components/redux/reducer";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStore } from "redux";
import Main from "./src/main";

const store = createStore(reducer);

function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
