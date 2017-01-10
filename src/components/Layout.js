import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return (
      <div className='wrapper'>
        <header>
          <div>
            <img src='http://i.imgur.com/un9rR5q.png' alt='pig head logo' height='350' width='350' />
          </div>
          <div className='copy'>
            <h1>The Bakin Bacon</h1>
            <h2>"Put bacon on everything"</h2>
          </div>
        </header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/locations'>Locations</Link>
            </li>
            <li>
              <Link to='/orders'>Order Online!</Link>
            </li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
        <footer>
          <p>&copy; 2017 The Bakin Bacon. Built with &hearts; at The Iron Yard, in St. Petersburg, Florida.</p>
        </footer>
      </div>
    )
  }
}

export default Layout
