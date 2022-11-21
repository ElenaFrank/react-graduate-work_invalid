import React from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "../src/components/ui/navBar"
import Users from "./layouts/users"
import Main from "./layouts/main"
import Login from "./layouts/login"

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Switch>
                <Route path="/" exact component = {Main} />
                <Route path="/login/:type?" component = {Login} />
                <Route path="/users/:userId?/:edit?" component = {Users} />
            </Switch>
        </div>
    )
}
export default App
