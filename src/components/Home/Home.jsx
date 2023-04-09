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
          <div className="locationDiv ">
            <label htmlFor="distance" >Location</label>
            <input type='text' placeholder='Your Destination' className=''/>
          </div>
          <div className="distDiv ">
            <label htmlFor="location" >Duration</label>
            <input type='text' placeholder='days' className=''/>
          </div>
          <div className="priceDiv ">
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