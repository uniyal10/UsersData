import React, { useEffect, useState } from "react"
import Company from "./Company"
function Address(props) {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <li className="collection-item">{props.details.address.street}</li>
      <li className="collection-item">{props.details.address.suite}</li>
      <li className="collection-item">{props.details.address.city}</li>
      <li className="collection-item">{props.details.address.zipcode}</li>
      <li className="collection-item">{props.details.address.phone}</li>
      <li className="collection-item" style={toogleDiv} onClick={e => setToggle(prev => !prev)}>
        <span>
          <i style={Styletoggle} class="fas fa-building"></i>company
        </span>
        <i style={Styletoggle} className="fa fa-sort-down"></i>
      </li>
      {toggle && <Company company={props.details.company} />}
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

export default Address
