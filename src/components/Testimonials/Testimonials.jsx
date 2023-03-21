import React from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';


const Testimonials = () => {

//    animation-transition  
   const transition = {type: 'spring', duration: 3}

   const [selected, setSelected] = useState(0);
   const tLength = testimonialsData.length;


  return (
    <div className="testimonials">

{/* left-side of testimonials  */}
<div className="left-t">
<span>Testimonials</span>
<span className='stroke-text'>What they</span>
<span>say about us</span>

{/* testimonialsData */}
<motion.span
key={selected}
initial={{ opacity: 0, x: -100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: 100 }}
transition={transition}
>
    {testimonialsData[selected].review}
</motion.span>

<span>
    <span style={{ color: 'var(--orange)'}}>
        {testimonialsData[selected].name}
    </span>{' '}
    - {testimonialsData[selected].status}
</span>


</div>
{/* left-side of testimonials  */}


{/* right-side of testimonials  */}
<div className="right-t">
{/* animation-effect  */}
<motion.div
initial={{ opacity: 0, x: -100 }}
transition={{...transition, duration: 2 }}
whileInView={{ opacity: 1, x: 0 }}
></motion.div>
{/* animation-effect  */}
<motion.div
initial={{ opacity: 0, x: 100 }}
transition={{...transition, duration: 2 }}
whileInView={{ opacity: 1, x: 0 }}
></motion.div>

{/* animation-effect  */}
<motion.img 
key={selected}
initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -100 }}
transition={transition}
src={testimonialsData[selected].image} alt="" />

<div className="arrows">
<img 
onClick={() => {
    selected===0
    ?setSelected(tLength -1)
    :setSelected((prev) => prev -1);
}}
src={leftArrow} alt="" />

<img 
onClick={() => {
    selected===tLength -1 
    ? setSelected(0)
    : setSelected((prev) => prev +1);
}}
src={rightArrow} alt="" />
</div>

</div>
{/* right-side of testimonials  */}


</div>
  )
}

export default Testimonials
