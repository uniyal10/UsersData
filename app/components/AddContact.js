import React, { useEffect, useState } from "react"
import { Link, withRouter } from "react-router-dom"
import Axios from "axios"

function AddComponent(props) {
  const [name, setName] = useState()
  const [number, setNumber] = useState()
  const [email, setEmail] = useState()
  const [date, setDate] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let response = await Axios.post("/add", { name, date, number, email })
      if (response.data) {
        props.list.push({ id: Math.random(200), name, date, number, email })
        props.history.push("/")
      }
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
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit} action="#">
        <div className="input-field">
          <input onChange={e => setName(e.target.value)} type="text" name="name" required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input onChange={e => setNumber(e.target.value)} type="number" name="number" required />
          <label htmlFor="number">Number</label>
        </div>
        <div className="input-field">
          <input onChange={e => setEmail(e.target.value)} type="email" name="email" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input onChange={e => setDate(e.target.value)} type="date" name="date" required />
        </div>
        <button className="btn">save</button>
      </form>
    </div>
  )
}

export default withRouter(AddComponent)
