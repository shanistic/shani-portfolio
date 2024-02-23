import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import resume from "../assets/Resume.pdf";
const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>

      <button
        className="navBtn"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const handleClick = (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2 onClick={handleClick}>SHANI</h2>
    <div>
      <a
        onClick={() => {
          setMenuOpen && setMenuOpen(false);
        }}
        href="#home"
      >
        Home
      </a>
      <a onClick={() => setMenuOpen && setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen && setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen && setMenuOpen(false)} href="#contact">
        Contact
      </a>
      <a href={resume} download>
        Resume
      </a>
    </div>
    <a href="mailto:shanisticdev@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
