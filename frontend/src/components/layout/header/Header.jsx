import React, { useState } from 'react'
import './Header.css'
import Head from './Head'

import Navbar from './Navbar'
import { getCurrentUser } from '../../../services'

const Header = () => {
  const name = localStorage.getItem('name')
  const email = localStorage.getItem('email')
  return (
    <div className="">
      <Head />
      <Navbar name={name} email={email} />
    </div>
  )
}

export default Header
