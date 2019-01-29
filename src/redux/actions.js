export function authUser (user) {
  return {
    type: 'AUTH_USER',
    payload: user
  }
}

export function setOrders (orders) {
  return {
    type: 'SET_ORDERS',
    payload: orders
  }
}

export function setUsers (users) {
  return {
    type: 'SET_USERS',
    payload: users
  }
}

export function logout () {
  return {
    type: 'LOGOUT'
  }
}

export function pickupOrder (orderId) {
  return {
    type: 'PICKUP_ORDER',
    payload: {
      orderId: orderId,
      timestampPickup: Date.now()
    }
  }
}

export function deliverOrder (orderId) {
  return {
    type: 'DELIVER_ORDER',
    payload: {
      orderId: orderId,
      timestampDelivery: Date.now()
    }
  }
}

export function assignOrder (orderId, bikerId) {
  return {
    type: 'ASSIGN_ORDER',
    payload: {
      orderId: orderId,
      bikerId: parseInt(bikerId)
    }
  }
}
