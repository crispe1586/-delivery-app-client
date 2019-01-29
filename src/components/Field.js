import React from 'react'

const Field = ({ label, onChange, value, type, placeholder, error }) => (
  <div className="Field">
    <label>{label}</label>
    <input
      className={ error ? 'Invalid' : '' }
      type={ type }
      onChange={ onChange }
      value={ value }
      placeholder={ placeholder } />
  </div>
)

export default Field
