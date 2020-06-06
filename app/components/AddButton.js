import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function AddButton() {
  return (
    <div className="fixed-action-btn">
      <Link to="/contact/add" className="btn-floating btn-large red">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
  )
}

export default AddButton
