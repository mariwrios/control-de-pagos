
import React from "react"
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom"
import { Ajustes } from "../components/ajustes/Ajustes"
import {  Home } from "../components/home/Home"
import { Profile} from "../components/profile/Profile"
import { Payment } from "../components/payment/Payment"
import { Navbar } from "../components/ui/Navbar"



const Dashboard = () => {
  return (
    <Router>
     <Navbar/>
      <div>
        <Switch>
          <Route exact path="/inicio" component={Home} />
          <Route exact path="/pagos" component={Payment} />
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/ajustes" component={Ajustes} />
          <Redirect to="/inicio" />
        </Switch>
      </div>
    </Router>
  )
}

export default Dashboard