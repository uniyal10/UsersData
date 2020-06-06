import React, { useEffect, useState, useContext } from "react"
import Axios from "axios"

//component
import ContactItem from "./ContactItem"

function Contact(props) {
  const [list, setList] = useState([])

  useEffect(() => {
    Axios.get("/")
      .then(response => {
        setList(response.data)
      })
      .catch(e => console.log(e))
  }, [])
  const listItem = list.map(listItem => {
    return <ContactItem key={listItem._id} listItem={listItem} />
  })

  return (
    <div className="container">
      <h1>Contacts</h1>
      <ul className="collection">{listItem}</ul>
    </div>
  )
}

export default Contact
