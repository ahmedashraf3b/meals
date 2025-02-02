import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.scss';


export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className='pa'>
    <Outlet/>
    </div>
    <Footer/>
    
    </>)
}
