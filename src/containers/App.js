import { connect } from 'react-redux'
import Container from './Container'
import { authUser, logout, setOrders, setUsers, pickupOrder, deliverOrder, assignOrder } from '../redux/actions'

function mapStateToProps (state) {
  return { ...state }
}
function mapDispatchToProps (dispatch) {
  return {
    authUser: (user) => dispatch(authUser(user)),
    logout: () => dispatch(logout()),
    setOrders: (orders) => dispatch(setOrders(orders)),
    setUsers: (users) => dispatch(setUsers(users)),
    pickupOrder: (orderId) => dispatch(pickupOrder(orderId)),
    deliverOrder: (orderId) => dispatch(deliverOrder(orderId)),
    assignOrder: (orderId, bikerId) => dispatch(assignOrder(orderId, bikerId))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container)
export default App
