import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import '../assets/scss/App.scss'
import { hasRole } from '../helper/'
import Axios from 'axios'
import { ORDERS_ENDPOINT, USERS_ENDPOINT } from '../routes'

class Container extends Component {

  componentDidMount () {
    const { setOrders, setUsers } = this.props

    Axios.get(
      ORDERS_ENDPOINT
    ).then(res => {
      setOrders(res.data)
    }).catch(() => {
      setOrders([])
    })
    Axios.get(
      USERS_ENDPOINT
    ).then(res => {
      setUsers(res.data)
    }).catch(() => {
      setUsers([])
    })
  }
  render () {
    const {
      users,
      orders,
      loggedUser,
      authUser
    } = this.props

    if (!users || !orders) {
      return <div> Loading... </div>
    }

    return (
      <Router>
        <div className="App">
          <Switch>
            {/* Login page */}
            <Route exact path="/"
              render={
                (r) => <Login authUser={ authUser } router={ r } />
              } />
            {/* Manager dashboard */}
            {hasRole(loggedUser, ['manager']) &&
              <Route exact path="/manager"
                render={
                  (r) => <Dashboard context="manager" { ...this.props } router={ r } />
                } />
            }
            {/* Biker dashboard */}
            {hasRole(loggedUser, ['biker']) &&
              <Route exact path="/biker/:id"
                render={
                  (r) => <Dashboard context="biker" { ...this.props } router={ r } />
                } />
            }
            {/* Default */}
            <Route render={
              () => <Redirect to="/" />
            } />
          </Switch>
        </div>
      </Router>
    )
  }

}

export default Container
