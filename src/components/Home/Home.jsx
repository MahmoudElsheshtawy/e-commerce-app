// /* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import BannerImg from "../../../src/img/banner-img.png";
import './Home.css'
const Home = () => {
  return (

<div className="hero">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor display flex grid of 
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt='sasvyt' />
            </div>
        </div>


  )
}

export default Home