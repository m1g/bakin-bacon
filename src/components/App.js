import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Menu from './Menu'
import Contact from './Contact'
import Home from './Home'
import Locations from './Locations'
import MenuSection from './MenuSection'
import Location from './Location'
import Orders from './Orders'

class App extends Component {

  render () {
    return (
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route path='/' component={Home} />
          <Route path='/menu' component={Menu}>
            <Route path=':slug' component={MenuSection} />
          </Route>
          <Route path='/contact' component={Contact} />
          <Route path='/locations' component={Locations} />
          <Route path='/locations/:slug' component={Location} />
          <Route path='/orders' component={Orders} />
        </Route>
      </Router>
    )
  }
}

export default App
