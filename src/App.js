import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Header from "./Components/Header";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Setting from "./Components/Setting";
import NewPost from "./Components/Newpost";
import Readarticle from "./Components/Readarticle";
class App extends React.Component {

  state = {
    userName:""
  }
  

  render(){
    return (
      <>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path = "/Readarticle/:slug" component = {Readarticle}/>
        <Route path = "/Homepage" component ={Homepage}/>
        <Route path = "/Register" component = {Register}/>
        <Route path = "/Login" component= {Login} />
        <Route path = "/Setting" component = {Setting}/>
        <Route path = "/NewPost" component = {NewPost}/>
      </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
