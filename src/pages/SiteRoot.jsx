import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const SiteRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default SiteRoot
