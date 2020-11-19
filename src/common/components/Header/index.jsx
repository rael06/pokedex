import React from 'react'
import './style.css'
import logo from './logo.svg'

export default function Header() {
  return (
    <div className="header">
      <img className="logo" alt="logo" src={logo} />
      <p>language selection</p>
    </div>
  )
}
