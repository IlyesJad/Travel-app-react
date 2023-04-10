import React from 'react'
import './popular.css'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs'
import img1 from '../../assets/Citys/Moscow.jpg'
import img2 from '../../assets/Citys/Peter.jpg'
import img3 from '../../assets/Citys/Perm.jpg'
import img4 from '../../assets/Citys/Volgograd.jpg'
import img5 from '../../assets/Citys/ufa.jpg'

import { TbGardenCart } from 'react-icons/tb'
import { CgLaptop } from 'react-icons/cg'
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
        desTitle:"",
        location:"Saint Petersbourg",
        garde:""
    },
    {
        id:Math.floor(Math.random() * 100),
        imgSrc:img3,
        desTitle:"",
        location:"Perm",
        garde:""
    },
    {
        id:Math.floor(Math.random() * 100),
        imgSrc:img4,
        desTitle:"",
        location:"Volgograd",
        garde:""
    },
    {
        id:Math.floor(Math.random() * 100),
        imgSrc:img5,
        desTitle:"",
        location:"Ufa",
        garde:""
    },
    
]
console.log(data)
const Popular = () => {

    return (
        <section className='popular section container'>
            <div className='secContainer'>
                <div className='secHeader flex'>
                    <div className="textDiv">
                        <h2 className='secTitle'>
                            Popular
                        </h2>
                        <p>
                            From all Contry you can viste any place you want
                        </p>
                    </div>
                    <div className="iconDiv flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon' />
                    </div>

                </div>
                <div className="mainContent grid">
                {data.map(data=>(
                     <div className="singleDestination">
                     <div className="destImage">
                         
                         <img src={data.imgSrc} alt="Image title" />
                         <div className='overlayerInfo'>
                             <h3></h3>
                             <p>{data.desTitle}</p>
                             <BsArrowRightShort className='icon' />
                         </div>
                     </div>
                     <div className='destFooter'>
                         <div className='number'>
                             01
                         </div>
                         <div className="destText flex">
                             <h6>{data.location}</h6>
                             <span className='flex'>
                                 <span className='dot'>
                                     <BsDot/>
                                 </span>
                                 Dot
                             </span>
                         </div>
                     </div>
                 </div>
                ))}
                   
                </div>


            </div>

        </section>
    )
}

export default Popular