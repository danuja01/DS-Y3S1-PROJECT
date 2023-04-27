import React, { useEffect, useState } from 'react'
import './Header.css'
import Head from './Head'

import Navbar from './Navbar'

const Header = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
  }, [])

  // const name = localStorage.getItem('name')
  // const email = localStorage.getItem('email')
  return (
    <div className="">
      <Head />
      <Navbar name={name} email={email} />
    </div>
  )
}

export default Header
