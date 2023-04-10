import React from 'react'
import './offers.css'
import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../assets/reduction/london.jpg'
import img2 from '../../assets/reduction/tunisia.jpg'
import img3 from '../../assets/reduction/prague.jpg'
import img4 from '../../assets/reduction/Barcelona.jpg'
import img5 from '../../assets/reduction/paris.jpg'

const data = [
  {
    id:Math.floor(Math.random() * 100),
    imgSrc:img1,
    desTitle:"Moscow City",
    location:"Moscow",
    garde:""
},
{
  id:Math.floor(Math.random() * 100),
  imgSrc:img2,
  desTitle:"Moscow City",
  location:"Moscow",
  garde:""
},
{
  id:Math.floor(Math.random() * 100),
  imgSrc:img3,
  desTitle:"Moscow City",
  location:"Moscow",
  garde:""
},
{
  id:Math.floor(Math.random() * 100),
  imgSrc:img4,
  desTitle:"Moscow City",
  location:"Moscow",
  garde:""
},
{
  id:Math.floor(Math.random() * 100),
  imgSrc:img5,
  desTitle:"Moscow City",
  location:"Moscow",
  garde:""
},
]
const Offers = () => {
  return (
    <section className='offer container section'>
      <div className='secContainer'>
        <div className='secIntro'>
          <h2>
            Special Offers
          </h2>
          <p>
            sglkdlkgnlkjs
          </p>
        </div>
        <div className='mainContent grid'>
          {data.map(data=> <div className="singleOffer">
            <div className='destImage'>
              <img src={data.imgSrc} alt='' />
              <span className='discount'>
                30% off
              </span>
            </div>
            <div className="offerBody">
              <div className="price flex">
                <h4>
                  $1000
                </h4>
                <span className='status'>
                  For Rent
                </span>
              </div>
              <div className="amenities flex">
                <div className='singleAmenities flex'>
                  <MdKingBed className='icon'/>
                  <small>2 Beds</small>
                </div>
                <div className='singleAmenities flex'>
                  <MdBathtub className='icon'/>
                  <small>1 Bath</small>
                </div>
                <div className='singleAmenities flex'>
                  <FaWifi className='icon'/>
                  <small>Wi-FI</small>
                </div>
                <div className='singleAmenities flex'>
                  <MdAirportShuttle className='icon'/>
                  <small>Shuttle</small>
                </div>
              </div>
              <div className="location flex">
                <MdLocationOn className='icon'/>
                <small>450 Vine #310, Moscow</small>
              </div>
              <button className='btn flex'>
                View Detatils
                <BsArrowRightShort className='icon'/>
              </button>
            </div>
          </div>)}
         
        </div>
      </div>
    </section>
  )
}

export default Offers