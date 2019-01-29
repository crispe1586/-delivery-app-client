import React from 'react'
import ManagerActions from './ManagerActions'
import BikerActions from './BikerActions'

const Order = ({ order, context, pickupOrder, deliverOrder, assignOrder, users }) => {
  const timestamps = {
    pickup: order.timestampPickup
      ? new Date(order.timestampPickup).toLocaleDateString('en-US') + ' ' + new Date(order.timestampPickup).toLocaleTimeString('en-US')
      : '-',
    delivery: order.timestampDelivery
      ? new Date(order.timestampDelivery).toLocaleDateString('en-US') + ' ' + new Date(order.timestampDelivery).toLocaleTimeString('en-US')
      : '-'
  }

  return (
    <div className="Order">
      <div className="Location">{ order.origin }  &#8674;  { order.destination }</div>
      <div className="Status">{ order.status }</div>
      <div className="Actions">
        { context === 'manager' &&
        <ManagerActions
          order={ order }
          users={ users }
          assignOrder={ assignOrder } />
        }
        { context === 'biker' &&
        <BikerActions
          order={ order }
          pickupOrder={ pickupOrder }
          deliverOrder={ deliverOrder } />
        }
      </div>
      <div className="Timestamps">
        <span>Pickup time: { timestamps.pickup }</span>
        <span>Delivery time: { timestamps.delivery }</span>
      </div>
    </div>
  )
}

export default Order
