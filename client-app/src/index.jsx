import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware} from "redux";
import App from "./component/App"
import reducers from "./module";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDom.render(
  // <App />,
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);