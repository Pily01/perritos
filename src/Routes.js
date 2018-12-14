import React from "react"
import {Route, Switch} from "react-router-dom"
import AllDogs from "./components/AllDogs";
import DogsDetail from "./components/DogsDetail";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

function Routes () {
  return(
    <Switch>
      <Route exact path="/dogs" component={AllDogs}/>
      <Route path="/dogs/:id" component={DogsDetail}/>}
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
  )
}

export default Routes