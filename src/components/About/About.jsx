import React from 'react'
import './about.css'
import img1 from '../../assets/about/mountains.jpg'
import img2 from '../../assets/about/hikingjpg.jpg'
import img3 from '../../assets/about/customers.jpg'
import vdo from '../../assets/about/video/sunset-111204.mp4'
const About = () => {
  return (
   <section className='about section'>
    <div className="secContainer">
      <div className="title">
       <h2>Why Hiking</h2> 
      </div>
      <div className="mainContent container grid">
        <div className="singleItem">
          <img src={img2} alt=''/>
          <h3>100+ Mountains</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi distinctio quasi rem ipsa, laudantium, ab temporibus quam tempora a officiis enim illum quis atque. Ea expedita molestias dolores inventore?</p>
        </div>
        <div className="singleItem">
          <img src={img1} alt=''/>
          <h3>1000+ Hiking</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi distinctio quasi rem ipsa, laudantium, ab temporibus quam tempora a officiis enim illum quis atque. Ea expedita molestias dolores inventore?</p>
        </div>
        <div className="singleItem">
          <img src={img3} alt=''/>
          <h3>100+ Costumers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi distinctio quasi rem ipsa, laudantium, ab temporibus quam tempora a officiis enim illum quis atque. Ea expedita molestias dolores inventore?</p>
        </div>


      </div>
      <div className="videoCard container">
        <div className="cardContent grid">
          <div className="cardText">
            <h2>
              Wonderful House experience in there
            </h2>
            <p>
              the Adventure is so nice
            </p>
          </div>
          <div className="cardVideo">
            <video src={vdo} autoPlay loop muted type="video/mp4" /> 
          </div>
        </div>

      </div>


    </div>

   </section>
  )
}

export default About