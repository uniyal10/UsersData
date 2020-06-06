import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"
Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/users"

//Components
import Users from "./components/Users"
import Navbar from "./components/Navbar"
import UserDetails from "./components/UserDetails"
function Main() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/:id">
          <UserDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept()
}
