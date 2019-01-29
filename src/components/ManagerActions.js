import React, { Component } from 'react'
import { hasRole } from '../helper'
import Select from './Select'

class ManagerActions extends Component {

  constructor (props) {
    super(props)
    this.handleBikeSelection = this.handleBikeSelection.bind(this)
  }
  handleBikeSelection (e) {
    const {
      order,
      assignOrder
    } = this.props
    const value = e.target.value
    assignOrder(order.id, value)
  }
  render () {
    const {
      order,
      users
    } = this.props
    const bikers = users.filter(user => {
      return hasRole(user, ['biker'])
    })
    const biker = users.find(u => u.id === order.assignee)
    return (
      <div className="ManagerActions">
        { biker && `Biker: ${biker.name}`}
        {!biker &&
          <Select
            label="Biker: "
            placeholder="Select a biker"
            value=""
            options={ bikers }
            onChange={ this.handleBikeSelection } />
        }
      </div>
    )
  }

}

export default ManagerActions
