import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Header from "./Components/Header";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage"
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path = "/Homepage" component ={Homepage}/>
      <Route path = "/Register" component = {Register}/>
      <Route path = "/Login" component= {Login} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
