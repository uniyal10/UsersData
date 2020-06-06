import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ContactItem(props) {
  const [listItem, setListItem] = useState(props.listItem)

  return (
    <li className="collection-item">
      <Link to={`/contacts/${listItem.id}`}>
        {listItem.id}
        {listItem.name}
      </Link>
    </li>
  )
}

export default ContactItem
