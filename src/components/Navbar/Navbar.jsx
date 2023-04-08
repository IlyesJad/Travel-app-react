import React, { useState } from 'react'
import './navbar.css'
import { CgBee } from 'react-icons/cg'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
  const [active,setActive] = useState('navBar');
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }
  const removeNav=()=>{
    setActive('navBar')
  }
  console.log(active)
  return (
    <section className='navBarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a className='logo' href='#'>
            <h1 className='flex'><CgBee className='icon' />Travel</h1>
          </a>
        </div>
        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a className='navLink' href="#">Home</a>
            </li>
            <li className='navItem'>
              <a className='navLink' href="#">Products</a>
            </li>
            <li className='navItem'>
              <a className='navLink' href="#">Resources</a>
            </li>
            <li className='navItem'>
              <a className='navLink' href="#">Contacts</a>
            </li>
            <li className='navItem'>
              <a className='navLink' href="#">Blog</a>
            </li>
            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>
              <button className='btn'>
                <a href="#">Register</a>
              </button>
              </div> 
          </ul>
          <div className="closeNavbar" onClick={removeNav}><AiFillCloseCircle className='icon'/></div>
        </div>
        <div onClick={showNav} className="toggleNavbar " >
          <TbGridDots className="icon"/>
        </div>
      </div>
    </section>
  )
}

export default Navbar