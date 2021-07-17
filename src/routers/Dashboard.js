
import React from "react"
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom"
import { Ajustes } from "../components/ajustes/Ajustes"
import { HomeDelegado } from "../components/delegado/home/HomeDelegado"
import { ProfileDelegado } from "../components/delegado/profile/ProfileDelegado"
import { PagosDelegado } from "../components/pagos/PagosDelegado"
import { Navbar } from "../components/ui/Navbar"



const Dashboard = () => {
  return (
    <Router>
     <Navbar/>
      <div>
        <Switch>
          <Route exact path="/inicio" component={HomeDelegado} />
          <Route exact path="/pagos" component={PagosDelegado} />
          <Route exact path="/perfil" component={ProfileDelegado} />
          <Route exact path="/ajustes" component={Ajustes} />
          <Redirect to="/inicio" />
        </Switch>
      </div>
    </Router>
  )
}

export default Dashboard