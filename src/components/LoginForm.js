import React, { Component } from 'react'
import Field from './Field'
import Button from './Button'
import Axios from 'axios'
import { AUTH_ENDPOINT } from '../routes'

class LoginForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      buttonLabel: 'Login',
      isValid: false,
      isSubmiting: false,
      isSubmitted: false,
      formFields: [
        {
          name: 'username',
          value: '',
          type: 'text',
          validity: false,
          label: 'Username',
          placeholder: 'Your username...'
        },
        {
          name: 'password',
          value: '',
          type: 'password',
          validity: false,
          label: 'Password',
          placeholder: 'Your password...'
        }
      ]
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.validateField = this.validateField.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.submitFormByKeyboard = this.submitFormByKeyboard.bind(this)
  }
  componentDidMount () {
    window.addEventListener('keyup', this.submitFormByKeyboard, false)
  }
  componentWillUnmount () {
    window.removeEventListener('keyup', this.submitFormByKeyboard, false)
  }
  submitFormByKeyboard (e) {
    e.preventDefault()
    if (e.keyCode === 13) {
      this.submitForm()
    }
  }
  handleUpdate (field, value) {
    this.setState(
      function (newState) {
        const formFields = newState.formFields.map(
          function (f) {
            if (f.name === field) {
              f.value = value
            }
            return f
          })
        return {
          formFields: formFields
        }
      },
      // Callback
      () => { this.validateField(field, value) }
    )
  }

  validateField (fieldName, fieldValue) {
    let validity = false

    switch (fieldName) {
      case 'username':
        validity = fieldValue.trim().length > 0
        break
      case 'password':
        validity = fieldValue.trim().length > 0
        break
      default:
        break
    }

    this.setState(
      function (newState) {
        const formFields = newState.formFields.map(
          function (f) {
            if (f.name === fieldName) {
              f.isValid = validity
            }
            return f
          })
        return {
          formFields: formFields
        }
      }
      , this.validateForm)
  }

  validateForm () {
    this.setState({ isValid: this.state.formFields.every((field) => field.isValid) })
  }

  submitForm () {
    const self = this
    const { authUser, router } = this.props
    const { isValid, formFields } = this.state
    const formData = formFields.reduce(function (allFields, field) {
      allFields[field.name] = field.value
      return allFields
    }, {})

    if (isValid) {
      Axios.post(
        AUTH_ENDPOINT,
        formData,
        { headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        } }
      ).then(res => {
        const user = res.data
        const redirectPath = (user.roles[0] === 'manager') ? `/manager` : `/biker/${user.id}`
        authUser(user)
        this.clearForm()
        router.history.push(redirectPath)
      }).catch(() => {
        this.setState({ buttonLabel: 'Your login credentials are incorrect' })
        setTimeout(function () {
          self.setState({ buttonLabel: 'Login' })
        }, 3000)
      })
    } else {
      this.setState({ isSubmitted: true })
    }
  }

  clearForm () {
    const newFormFields = this.state.formFields.map(
      f => ({ ...f, value: '', isValid: false })
    )

    this.setState({
      buttonLabel: 'Send',
      formFields: newFormFields,
      isValid: false,
      isSubmiting: false,
      isSubmitted: false
    })
  }

  render () {
    const {
      formFields,
      buttonLabel,
      isSubmitting,
      isSubmitted,
      isValid
    } = this.state

    return (
      <div className="LoginForm">
        {formFields.map((field, i) => <Field
          key={ i }
          label={ field.label }
          type={ field.type }
          placeholder={ field.placeholder }
          textarea={ field.isTextarea }
          onChange={ (e) => this.handleUpdate(field.name, e.target.value) }
          value={ field.value }
          error={ !field.isValid && isSubmitted } />)}
        <Button
          label={ buttonLabel }
          callback={ this.submitForm }
          isDisabled={ (!isValid && isSubmitted) || isSubmitting } />
      </div>
    )
  }

}

export default LoginForm
