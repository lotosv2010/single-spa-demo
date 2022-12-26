import React from "react"
import { BrowserRouter, Link } from "react-router-dom"

export default function Root(props) {
  return (
    <BrowserRouter>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/">@single-spa/welcome</Link>{" "}
        <Link to="/jsdemo">@study/js-demo</Link>{" "}
        <Link to="/react-demo">@study/react-demo</Link>{" "}
        <Link to="/vue-demo">@study/vue-demo</Link>
      </div>
    </BrowserRouter>
) }