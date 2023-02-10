import React from 'react'
import {starterKit} from './starterKit.js'
import CustomButton from './CustomButton.js'
import { motion, Variants} from 'framer-motion'
import './Kit.css'

const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
        x:0,
        opacity:1,
        rotate:[0,10,0],
        transition: {type:"spring",
            bounce:0.4,
            duration:1
        } 
    }
}
const textAnimate={
    offscreen:{y:100, opacity:0},
    onscreen:{y:0,
        opacity:1,
        transition: {type:"spring",
            bounce:0.4,
            duration:1
        }
    }
}
function Card({ image, h2, p,id }) {
    return (
      <motion.div className="card" id={id}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:false, amount:0.5}}
          transition={{staggerChildren:0.5}}
      >
        <motion.div className="image-container"       
          variants={imageAnimate}
        ><img src={image} style={{width: '200px',marginTop: '10px'}}></img></motion.div>
        <motion.h2 
          variants={textAnimate}
        >{h2}</motion.h2>
        <motion.p
           variants={textAnimate}     
        > <CustomButton
        backgroundColor="hsl(149,59%,14%)"
        color="#fff"
        buttonText="Add to Cart"
        heroBtn={true}
      /></motion.p>
      </motion.div>
    );
  }
const Kit = () => {
    return (
        <div className="card-wrapper">
           {starterKit.map((item) => 
            <Card image={item.image} h2={item.h2} p={item.p}  />
           )}
        </div>
    )
}

export default Kit