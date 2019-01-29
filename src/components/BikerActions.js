import React from 'react'
import Button from './Button'

const BikerActions = ({ pickupOrder, deliverOrder, order: { id, status } }) => {
  return (
    <div className="BikerActions">
      <Button
        label="Pick Up"
        callback={ () => pickupOrder(id) }
        isDisabled={ status !== 'ASSIGNED' } />
      <Button
        label="Deliver"
        callback={ () => deliverOrder(id) }
        isDisabled={ status !== 'PICKED_UP' } />
    </div>
  )
}

export default BikerActions
