function reducer (state, action) {
  if (state === undefined) {
    return {
      loggedUser: null,
      orders: [],
      users: []
    }
  }
  switch (action.type) {
    case 'AUTH_USER': {
      return {
        ...state,
        loggedUser: action.payload
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        loggedUser: null
      }
    }
    case 'SET_ORDERS': {
      return {
        ...state,
        orders: action.payload
      }
    }
    case 'SET_USERS': {
      return {
        ...state,
        users: action.payload
      }
    }
    case 'PICKUP_ORDER': {
      const {
        orderId,
        timestampPickup
      } = action.payload

      const updatedOrders = state.orders.map((order, i) => {
        if (order.id !== orderId) {
          return order
        }
        return {
          ...order,
          status: 'PICKED_UP',
          timestampPickup: timestampPickup
        }
      })
      return {
        ...state,
        orders: updatedOrders
      }
    }
    case 'DELIVER_ORDER': {
      const {
        orderId,
        timestampDelivery
      } = action.payload
      const updatedOrders = state.orders.map((order, i) => {
        if (order.id !== orderId) {
          return order
        }
        return {
          ...order,
          status: 'DELIVERED',
          timestampDelivery: timestampDelivery
        }
      })
      return {
        ...state,
        orders: updatedOrders
      }
    }
    case 'ASSIGN_ORDER': {
      const {
        orderId,
        bikerId
      } = action.payload
      const updatedOrders = state.orders.map((order, i) => {
        if (order.id !== orderId) {
          return order
        }
        return {
          ...order,
          status: 'ASSIGNED',
          assignee: bikerId
        }
      })
      return {
        ...state,
        orders: updatedOrders
      }
    }
  }
}

export default reducer
