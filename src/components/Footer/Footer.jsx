import React from 'react'
import './footer.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer ">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className='logo flex'>

              <h1 className='flex'><SiYourtraveldottv className='icon' />
                Dot</h1>

            </a>
          </div>
        </div>
        <div className="socials flex">
          <AiFillFacebook className="icon" />
          <BsTwitter className="icon" />
          <AiFillInstagram className="icon" />
          </div>
      <div className="footerLinks ">
        <span className='linkTitle '>
          Information
        </span>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Explore</a>
        </li>
        <li>
          <a href='#'>Travel</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
      </div>
      <div className="footerLinks">
        <span className='linkTitle'>
          Helpful Links
        </span>
       <span className='phone'>+21656262339</span>
       <span className='email'>ilyes.jad@esprit.tn</span>
      </div>
        </div>
     
    </div>
  )
}

export default Footer