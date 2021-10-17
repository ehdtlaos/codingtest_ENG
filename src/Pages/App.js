import React, { useState } from 'react';
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './Redux/store';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div>
      <Provider store={store}>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar isOpen={isOpen} toggle={toggle}/>
      </Router>
      </Provider>
    </div>
  )
}

export default App;