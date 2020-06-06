import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import Axios from "axios"
Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/users"

//Components
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import ContactDetails from "./components/ContactDetails"
function Main() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Contact />
        </Route>
        <Route exact path="/contacts/:id">
          <ContactDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept()
}
