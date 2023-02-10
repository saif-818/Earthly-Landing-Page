import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import aboutUs from './about.png'
import Illustration from './illustration.png'
import './About.css'

const About = () => {
  const { scrollY } = useViewportScroll();

  const scaleRight = useTransform(scrollY, [0, 700], [2, 1]);
  const yRight = useTransform(scrollY, [400, 800], ["25vh", "0vh"]);
  const xRight = useTransform(scrollY, [400, 800], ["-25vw", "0vw"]);

  const xLeft = useTransform(scrollY, [400, 800], ["-60%", "0vw"]);

  return (
    <div style={{ width: "100vw", height: "240vh",marginTop: '250px',marginBottom: '220px' }}>
      <div
        style={{
          height: "86vh",
          display: "flex",
          position: "sticky",
          top: "0px"
        }}
      >
        <motion.div
          className="child"
          style={{
            height: "100%",
            width: "50vw",
            x: xLeft
          }}
        >
          <h2 className="about_title">About Earthly </h2>
          <p className="para_text">It’s high time for all of us to think about our impression and capacity to lessen the waste and its impacts on the climate. This must be finished by settling on a responsible choice of utilizing eco-friendly products. Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based coffee cups, and many sustainable products are items that are not unsafe to the climate. These are items produced using sustainable and organic raw materials. Earthly products are of the best quality and in the best designs. What’s more, it’s shockingly easy to roll out sure improvements to your way of life just by sorting out where to begin. Rather than utilizing a plastic cup, trade it for eco-friendly cups and eco-friendly containers. Earthly organic products are the most affordable option in the market. The other alternatives are expensive and lack quality.
          <br></br>
          <br></br>
          Enter Earthly, a spot for businesses that need to be a part of the green movement. We do an amazing job to give you the information and alternative sustainable products for your cafes and food business. Earthly has a fair trade policy for all business deals. You have the right to place orders for sustainable products that go with your budget and business. We’re endeavoring to set new principles, increase present expectations, and review what is useful for your business and our planet. Each move you make as a business is a chance to be better. When you shop at Earthly, you add to a superior future for every one of us. So now you know a superior method to shop sustainable products, and join the development beneath! We offer a variety of biodegradable options like biodegradable cups, biodegradable containers, organic toothbrushes and many more to choose from.</p>
        </motion.div>
        <motion.div
          className="child"
          style={{
            height: "100%",
            width: "50vw",
            scale: scaleRight,
            y: yRight,
            x: xRight
          }}
        >
          <img src={Illustration} className='about_img'></img>
        </motion.div>
      </div>
    </div>
  );
}


export default About