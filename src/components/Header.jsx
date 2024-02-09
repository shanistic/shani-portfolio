import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

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

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>SHANI.</h2>
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
    </div>
    <a href="mailto:shanisticdev@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
