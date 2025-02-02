import React from 'react'
import './Navbar.scss';
import LOGO from './../../assets/LOGO1.png';
import { Link } from 'react-router-dom';



export default function Navbar() {
  return <>
  <div className='positon md:fixed md:top-0 md:left-0 md:right-0 '>
<div className='w'>
<img src={LOGO} className='width' alt="" />
<div className='flex flex-col'>
  <Link to={''}>
  <button className='buttonOne rounded-xl shadow-lg shadow-[#ffa6009f] hover:shadow-[#f1f1f1] hover:scale-105 transition-all'>Meals</button>
  </Link>
  <Link to={''}>
  <button className='buttonTwo rounded-xl shadow-lg shadow-[#d5d1d1] hover:shadow-[#f1f1f1] hover:scale-105 transition-all border border-[#b5acac]'>Ingredients</button>
  </Link>
  <Link to={''}>
  <button className='buttonTwo rounded-xl shadow-lg shadow-[#d5d1d1] hover:shadow-[#f1f1f1] hover:scale-105 transition-all border border-[#b5acac]'>Area</button>
  </Link>
</div>
</div>
  </div>
  
  </>
}
