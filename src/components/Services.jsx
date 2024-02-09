import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaPuzzlePiece, FaUserGear } from "react-icons/fa6";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>6+</h3>
          <p>Months Experience</p>
        </motion.div>
        <motion.div
          className="serviceBox2 color"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <FaUserGear />
          <span>Versatile Expertise</span>
        </motion.div>
        <motion.div
          className="serviceBox3 color"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{ delay: 0.2 }}
        >
          <FaPuzzlePiece />
          <span>Integrated Solutions</span>
        </motion.div>
        <motion.div
          className="serviceBox4 color"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <FaLightbulb />
          <span>Creative Fusion</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
