import React from "react"
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"

export default function Root(props) {
  return (
    <BrowserRouter basename="/react-demo">
      <p>{props.name}</p>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}