import React, { useEffect, useState } from "react"

function Search(props) {
  return (
    <div style={InputStyle}>
      <input onChange={e => props.setValue(e.target.value)} style={InputField} placeholder="Search.." type="text" autoFocus />
    </div>
  )
}

const InputStyle = {
  textAlign: "center"
}

const InputField = {
  margin: "10px",
  padding: "10px"
}
export default Search
