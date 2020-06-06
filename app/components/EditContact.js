import React, { useEffect, useState } from "react"
import { Link, useParams, withRouter } from "react-router-dom"
import Axios from "axios"

function EditContact(props) {
  const { id } = useParams()

  const [name, setName] = useState()
  const [number, setNumber] = useState()
  const [email, setEmail] = useState()
  const [date, setDate] = useState()

  function feedData() {
    feed.map(listItem => {
      console.log(listItem.name)
    })
  }
  useEffect(() => {
    Axios.get("/")
      .then(response => {
        const feed = response.data.filter(item => item._id == id)
        setName(feed[0].name)
        setEmail(feed[0].email)
        setDate(feed[0].date)
        setNumber(feed[0].number)
      })
      .catch(e => console.log(e))
  }, [])

  function handleClick() {
    appDispatch({ type: "editClose", value: false })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let response = await Axios.post("/edit", { id, name: name, date: date, number: number, email: email })
      if (response.data) {
        props.history.push("/")
      }
    } catch (e) {
      console.log("there is some problem")
    }
  }
  return (
    <div className="container">
      {" "}
      <br />
      <Link to="/" className="btn grey">
        Back
      </Link>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit} action="#">
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <br />
          <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" required />
        </div>
        <div className="input-field">
          <label htmlFor="number">Number</label>
          <br />
          <input value={number} onChange={e => setNumber(e.target.value)} type="number" name="number" required />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <br />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" required />
        </div>
        <div className="input-field">
          <input value={date} onChange={e => setDate(e.target.value)} type="date" name="date" required />
        </div>
        <button className="btn">save</button>
      </form>
    </div>
  )
}

export default withRouter(EditContact)
