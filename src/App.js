import React from 'react'
import './App.css'
import Login from "./components/Login";
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header";
import Profile from "./components/Profile";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <HeaderContainer />

        <Route exact path='/'
               render={ () => <Main /> }/>

        <Route exact path='/profile'
               render={ () => <Profile /> }/>

        <Route exact path='/login'
               render={ () => <Login /> }/>

    </div>
  )
}








export default App;
