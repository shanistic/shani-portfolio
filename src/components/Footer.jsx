import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://avatars.githubusercontent.com/u/133004578?s=400&u=021c494bc59ee316b5a48915fe87d561e40e77ad&v=4"
          }
          alt="Founder"
        />

        <h2>Muhammad Usman</h2>
        <p>Striving harder with each passing day.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/muhammad-usman-940b2a274"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100012336426519&mibextid=ZbWKwL"
            target={"blank"}
          >
            <AiFillFacebook />
          </a>
          <a href="https://github.com/shanistic" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
