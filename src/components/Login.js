import React from 'react'
import LoginForm from './LoginForm'

const Login = (props) => (
  <div className="Login">
    <img className="Logo" src="logo.svg" />
    <LoginForm { ...props } />
  </div>
)

export default Login
