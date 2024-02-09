import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import { useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Work = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const animations = {
    card1: {
      initial: { x: "-100%" },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: { duration: 0.7 },
    },
    card2: {
      initial: { y: "+100%" },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: { duration: 0.7 },
    },
  };

  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <div className="bloc-tabs">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <span> React JS</span>
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <span> Shopify / Wordpress </span>
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <span> Javascript</span>
          </div>
          <div
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            <span>Node / Express</span>
          </div>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            {data.reactprojects.map((i) => (
              <motion.div {...animations.card1}>
                <Card
                  title={i.title}
                  description={i.description}
                  imgSrc={i.imgSrc}
                  url={i.url}
                />
              </motion.div>
            ))}
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            {data.shopifyprojects.map((i) => (
              <motion.div {...animations.card2}>
                <Card
                  key={i.title}
                  title={i.title}
                  description={i.description}
                  imgSrc={i.imgSrc}
                  url={i.url}
                />
              </motion.div>
            ))}
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            {data.jsprojects.map((i) => (
              <motion.div {...animations.card1}>
                <Card
                  title={i.title}
                  description={i.description}
                  imgSrc={i.imgSrc}
                  url={i.url}
                />
              </motion.div>
            ))}
          </div>
          <div
            className={toggleState === 4 ? "content active-content" : "content"}
          >
            {data.nodeprojects.map((i) => (
              <motion.div {...animations.card2}>
                <Card
                  title={i.title}
                  description={i.description}
                  imgSrc={i.imgSrc}
                  url={i.url}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
