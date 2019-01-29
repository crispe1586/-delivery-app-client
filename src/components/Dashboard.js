import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'

class Dashboard extends Component {

  render () {
    const {
      context,
      loggedUser,
      logout,
      pickupOrder,
      deliverOrder,
      assignOrder,
      users
    } = this.props
    let { orders } = this.props

    if (context === 'biker') {
      orders = orders.filter((o) => o.assignee === loggedUser.id)
    }

    return (
      <div className="Dashboard">
        <Header loggedUser={ loggedUser } logout={ logout } />
        <div className="List">
          {orders.map((o) => {
            return (
              <Order key={ o.id }
                order={ o }
                users={ users }
                context={ context }
                pickupOrder={ pickupOrder }
                deliverOrder={ deliverOrder }
                assignOrder={ assignOrder } />
            )
          }
          )}
        </div>
      </div>
    )
  }

}

export default Dashboard
