import React, { Component } from 'react'

class Menu extends Component {

  render () {
    return (
      <div>
        <h2>Our Menu</h2>

        <nav>
          <ul>
            <li>Appetizers</li>
            <li>Entrees</li>
            <li>Deserts</li>
            <li>Bakin Specials</li>
          </ul>
        </nav>

        <section>
          <h3>Appetizers</h3>

          <table>
            <tbody>
              <tr>
                <th>Bacon Bites</th>
                <td>Bacon wrapped mini andouille sausage bites. Lightly smoked maple crusted bacon</td>
                <td>$8</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default Menu
