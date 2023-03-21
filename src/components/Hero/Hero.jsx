import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {

   const transition = {type: 'spring', duration: 3}
   const mobile = window.innerWidth<=768 ? true: false;

  return (

    // Hero-section...
    <div className="hero" id='home'>
    
    {/* blur effect  */}
    <div className="blur hero-blur"></div>

    {/* left-side  */}
      <div className="left-h">
       <Header/>

    {/* the best add  */}
       <div className="the-best-ad">

       {/* animation effect  */}
        <motion.div
        initial={{left: mobile? '165px': '238px'}}
        whileInView={{left: '8px'}}
        transition={{...transition, type: 'tween'}}
        ></motion.div>

        <span>the best fitness club in the town</span>
       </div>
       
    {/* hero-heading  */}
       <div className="hero-text">

        <div>
        <span className='stroke-text'>Shape </span>
        <span>Your</span>
        </div>

        <div>
        <span>Ideal body</span>
        </div>

        <div>
            <span>In here we will help you to Shape and build your body and 
            live up your life to fullest
            </span>
        </div>
        </div>

        {/* figures */}
        <div className="figures">
            <div>
            <span>
              <NumberCounter
              end={140}
              start={100}
              delay='4'
              preFix='+'
               />
            </span>
            <span>expert coaches</span>
            </div>

            <div>
            <span>
            <NumberCounter
              end={978}
              start={800}
              delay='4'
              preFix='+'
              />
            </span>
            <span>members joined</span>
            </div>

            <div>
            <span>
            <NumberCounter
              end={50}
              start={0}
              delay='4'
              preFix='+'
              />
            </span>
            <span>fitness programs</span>
            </div>

        </div>

        {/* hero buttons  */}
        <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
        </div>

        </div>
       {/* left-side  */}

       {/* right-side  */}
    <div className="right-h">

    {/* join-now button  */}
    <button className='btn'>Join Now</button>

    {/* animation effect  */}
    <motion.div 
    initial={{right: '-1rem'}}
    whileInView={{right: '4rem'}}
    transition={transition}
    className="heart-rate">
    <img src={Heart} alt="" />
    <span>Heart Rate</span>
    <span>116 bpm</span>
    </motion.div>

    {/* hero images  */}
  <img src={hero_image} alt="" className='hero_image' />
  <motion.img 
  initial={{right: '11rem'}}
  whileInView={{right: '20rem'}}
  transition={transition}
  src={hero_image_back} alt="" className='hero_image_back' />

    {/* calories  */}
    <motion.div 
    initial={{right: '37rem'}}
    whileInView={{right: '28rem'}}
    transition={transition}
    className="calories"
    >
        <img src={Calories} alt=""  />
        <div>
        <span>Calories Burned</span>
        <span>220 kcal</span>
        </div>
    </motion.div>

    </div>
    {/* right-side  */}


    </div>
  )
}

export default Hero
