import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from "react-redux";
// import rootReducer from "./Modules";
// import { rootSaga } from "./Modules";
// import createSagaMiddleware from "redux-saga";
// import { createStore, applyMiddleware, compose } from "redux";
import "./index.css";
import App from "./Pages/App"

// const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware)
//     // ,
//     // (window as any).__REDUX_DEVTOOLS_EXTENSION__
//     //   ? composeWithDevTools()
//     //   : (f) => f
//   )
// );

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <App />
  ,
  document.getElementById('root')
);
