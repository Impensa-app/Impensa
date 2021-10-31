import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignUp from "./Pages/SignUp"
import "./App.css"
const App = () => {

  return (
    <BrowserRouter basename="/impensa-budgeting-app">
    <div className="App">
  </div>
        <Route path='/' component={LandingPage}/>
        <Route path='/SignIn' component={(SignIn) => { 
     window.location.href = 'https://impensa.studio/SignIn'; 
     return null;
}}/>
        <Route path='/SignUp' component={SignUp}/>
      </BrowserRouter>
  );
}

export default App;
