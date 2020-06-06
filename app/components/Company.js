import React, { useEffect } from "react"

function Company(props) {
  return (
    <div>
      <li className="collection-item">{props.company.name}</li>
      <li className="collection-item">{props.company.catchPhrase}</li>
      <li className="collection-item">{props.company.bs}</li>
    </div>
  )
}

export default Company
