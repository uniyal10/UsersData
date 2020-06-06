import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import Axios from "axios"
Axios.defaults.baseURL = "https://mynotebookcontactapp.herokuapp.com"

//Components
import Contact from "./components/Contact"
import About from "./components/About"
import Navbar from "./components/Navbar"
import AddButton from "./components/AddButton"
import ContactDetails from "./components/ContactDetails"
import AddContact from "./components/AddContact"
import EditContact from "./components/EditContact"
function Main() {
  const [list, setList] = useState([])

  useEffect(() => {
    Axios.get("/")
      .then(response => {
        setList(response.data)
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Contact list={list} />
        </Route>
        <Route exact path="/contact/add">
          <AddContact list={list} />
        </Route>
        <Route exact path="/contacts/edit/:id">
          <EditContact list={list} />
        </Route>
        <Route exact path="/contacts/:id">
          <ContactDetails list={list} />
        </Route>
        <Route exact path="/about" component={About} />
      </Switch>
      <AddButton />
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept()
}
