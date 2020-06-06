import React, { useEffect, useState, useContext } from "react"
import Axios from "axios"

//component
import User from "./User"

function Users(props) {
  const [list, setList] = useState([])

  useEffect(() => {
    Axios.get("/")
      .then(response => {
        setList(response.data)
      })
      .catch(e => console.log(e))
  }, [])
  const listItem = list.map(listItem => {
    return <User key={listItem._id} listItem={listItem} />
  })

  return (
    <div className="container">
      <h1>Users</h1>
      <ul className="collection">{listItem}</ul>
    </div>
  )
}

export default Users
