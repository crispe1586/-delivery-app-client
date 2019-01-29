import React from 'react'

const Header = ({ loggedUser, logout }) => (
  <div className="Header">
    <div className="Header_Container">
      <img className="Header_Logo" src="logo.svg" />
      <div className="Header_Menu">
        <div className="Header_Message">
          Welcome {loggedUser.name}!
        </div>
        <div className="Header_Link" onClick={ () => logout() } >Logout</div>
      </div>
    </div>
  </div>
)

export default Header
