import React from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'
import img1 from '../../assets/Blog/beach.jpg'
import img2 from '../../assets/Blog/lake.jpg'
import img3 from '../../assets/Blog/oasis.jpg'

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
]

const Blog = () => {
  return (
   <section className='blog container section'>
    <div className='secContainer'>
      <div className="secIntro">
        <h2 className='secTitle'>
          Our best Blog
        </h2>
        <p>
          An insight to the incridible
        </p>
      </div>
      <div className="mainContainer grid">
        {data.map(data=><div className='singlePost grid'>
          <div className="imgDiv">
            <img src={data.imgSrc} alt='image name'/>
          </div>
            <div className="postDetails">
              <h3>
                Title
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Odit placeat vero ipsa et autem saepe labore
                 reiciendis, facilis eveniet voluptate asperiores,
                  aut consectetur quasi nulla animi minima quaerat
                   id ex.
              </p>
            </div>
            <a href='#' className='flex'>
              Read more 
              <BsArrowRightShort className='icon'/>
            </a>
        </div>)}
        

      </div>

    </div>

   </section>
  )
}

export default Blog