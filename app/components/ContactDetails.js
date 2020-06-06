import React, { useEffect, useState } from "react"
import Axios from "axios"
import { Link, useParams, withRouter } from "react-router-dom"

function ContactDetails(props) {
  const [details, setDetails] = useState([])
  const { id } = useParams()

  useEffect(() => {
    setDetails(props.list.filter(listitem => listitem._id == id))
  }, [])

  const item = details.map(item => {
    return (
      <li key={item._id} className="collection-item">
        <i className="fa fs-phone"></i> {item.number}
      </li>
    )
  })

  async function handleDelete() {
    try {
      let response = await Axios.post("/delete", { id })
      props.history.push("/")
    } catch (e) {
      console.log("something wrong")
    }
  }

  return (
    <div className="container">
      <br />
      <Link to="/" className="btn grey">
        Back
      </Link>
      <h1>Details</h1>
      <ul className="collection">{item}</ul>
      <Link className="btn" to={`/contacts/edit/${id}`}>
        Edit
      </Link>
      <button onClick={handleDelete} className="btn red right">
        Delete
      </button>
    </div>
  )
}

export default withRouter(ContactDetails)
