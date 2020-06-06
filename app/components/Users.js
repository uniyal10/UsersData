import React, { useEffect, useState, useContext } from "react"
import Axios from "axios"

//component
import User from "./User"
import Search from "./Search"

function Users(props) {
  const [list, setList] = useState([])
  const [value, setValue] = useState("")

  useEffect(() => {
    Axios.get("/")
      .then(response => {
        setList(response.data)
      })
      .catch(e => console.log(e))
  }, [])

  const posts = list.filter(contact => {
    if (value) return contact.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  })

  const searchList = posts.map(listItem => {
    return <User key={listItem._id} listItem={listItem} />
  })
  const listItem = list.map(listItem => {
    return <User key={listItem._id} listItem={listItem} />
  })
  return (
    <div className="container">
      <Search setValue={setValue} />
      <h1>Users</h1>
      <ul className="collection">{value ? searchList : listItem}</ul>
    </div>
  )
}

export default Users
