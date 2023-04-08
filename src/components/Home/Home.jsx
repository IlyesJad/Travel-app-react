import React from 'react'
import './home.css'
const Home = () => {
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>
          <h1 className='title'>
            Plan Your Trip with Travel Dot
          </h1>
          <p className="subTitle">
            Travel to your favourite city with respectful of the enviremnt
          </p>
          <button className='btn'>
            <a href="#">Explore Now</a>
            
          </button>
        </div>
        <div className="homeCard grid">
          <div className="locationDiv grid">
            <label htmlFor="distance" >Location</label>
            <input type='text' placeholder='Your Destination' className=''/>
          </div>
          <div className="distDiv grid">
            <label htmlFor="location" >Location</label>
            <input type='text' placeholder='Your Destination' className=''/>
          </div>
          <div className="priceDiv grid">
            <label htmlFor="location" >Location</label>
            <input type='text' placeholder='Your Destination' className=''/>
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