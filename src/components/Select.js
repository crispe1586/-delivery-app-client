import React, { Component } from 'react'

class Select extends Component {

  constructor (props) {
    super(props)
    this.createSelectOptions = this.createSelectOptions.bind(this)
  }
  createSelectOptions (option) {
    return <option key={ option.id } value={ option.id }>{ option.name }</option>
  }

  render () {
    const { label, onChange, value, options, placeholder } = this.props
    const optionsSelect = options.map(this.createSelectOptions)

    return (
      <div className="Select">
        <label>{label}</label>
        <select
          onChange={ onChange }
          onBlur={ onChange }
          value={ value }>
          <option value="">{ placeholder }</option>
          { optionsSelect }
        </select>
      </div>
    )
  }

}

export default Select
