import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Inventario from '../Views/Dashboard/Inventario/Inventario';
import Home from '../Views/Home/Home'
import Login from '../Views/Login/Login';
import Panel from '../Views/panel/Panel';
import RegisterUsuarios from "../Views/panel/Registros/RegisterUsuarios";
import TablaUsuario from "../Views/panel/VerTablas/TablaUsuario";

import setAuthToken from "../Components/helpers/setAuthToken";

import Spinner from "../Components/spinner/Spinner"

import store from '../Redux/Store/Store'
import { loadUser } from "../Redux/Actions/login.actions";


import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const AppRoutes = ({ auth: {isAuthenticated, loading} }) => {



  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

 if(isAuthenticated){

  /* Rutas Privadas */
  return (
        <Router>
    
    <Switch>
    <Route exact path={"/panel"} component={Panel}/>
    <Route exact path={"/*"} component={Panel}/>
    </Switch>
    </Router>

)
 }else{
  /* Rutas Publicas */
  return (
    <Router>

<Switch>
<Route exact path={"/"} component={Home}/>
<Route exact path={"/login"} component={Login}/>
<Route exact path={"/*"} component={Home}/>

</Switch>
</Router>

)
 }


}

AppRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AppRoutes)