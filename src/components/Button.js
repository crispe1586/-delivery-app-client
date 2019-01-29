import React from 'react'

const Button = ({ label, isDisabled, callback }) => (
  <input
    type="button"
    className="Button"
    value={ label }
    disabled={ isDisabled }
    onClick={ () => callback() } />
)

export default Button
