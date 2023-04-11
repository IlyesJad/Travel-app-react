import React, { useEffect } from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
Aos.init({duration:2000})
  },[])
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>
          <h1 data-aos="fade-up" className='title'>
            Plan Your Trip with Travel Dot
          </h1>
          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Travel to your favourite city with respectful of the enviremnt
          </p>
          <button data-aos="fade-up" data-aos-duration="3000" className='btn'>
            <a href="#">Explore Now</a>
            
          </button>
        </div>
        <div className="homeCard grid">
          <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv ">
            <label htmlFor="distance" >Location</label>
            <input type='text' placeholder='Your Destination' className=''/>
          </div>
          <div data-aos="fade-right" data-aos-duration="2500" className="distDiv ">
            <label htmlFor="location" >Duration</label>
            <input type='text' placeholder='days' className=''/>
          </div>
          <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv ">
            <label htmlFor="location" >Price</label>
            <input type='text' placeholder='from 1$ to 1000$ ' className=''/>
          </div>
          <button className='btn'>
            Search
          </button>

        </div>
      </div>
    </section>
  )
}

export default Home