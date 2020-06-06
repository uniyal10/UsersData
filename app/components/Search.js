import React, { useEffect, useState } from "react"

function Search() {
  const [name, setName] = useState()
  return (
    <div className="container">
      <input onChange={e => setName(e.target.value)} type="text" />
    </div>
  )
}

export default Search
