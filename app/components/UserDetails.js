import React, { useEffect, useState } from "react"
import Axios from "axios"
import { Link, useParams, withRouter } from "react-router-dom"
import Address from "./Address"

function UserDetails() {
  const [details, setDetails] = useState({})
  const { id } = useParams()
  const [toogle, setToggle] = useState(false)

  useEffect(() => {
    Axios.get(`/${id}`)
      .then(response => {
        setDetails(response.data)
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div className="container">
      <br />
      <Link to="/" className="btn grey">
        Back
      </Link>
      <h1>{details.name}</h1>
      <ul className="collection">
        <li className="collection-item ">
          <i style={Styletoggle} class="fa fa-user"></i>
          {"     "}
          {details.username}
        </li>
        <li className="collection-item">
          <i style={Styletoggle} className="fa fa-envelope-square"></i>
          {"      "}
          {details.email}
        </li>
        <li className="collection-item" style={toogleDiv} onClick={e => setToggle(prev => !prev)}>
          <span>
            <i style={Styletoggle} class="fas fa-building"></i>Address
          </span>
          <i style={Styletoggle} className="fa fa-sort-down"></i>
        </li>
        {toogle && <Address details={details} />}
      </ul>
    </div>
  )
}

const toogleDiv = {
  display: "flex",
  justifyContent: "space-between"
}
const Styletoggle = {
  fontSize: "20px",
  marginTop: "0px"
}
export default withRouter(UserDetails)
