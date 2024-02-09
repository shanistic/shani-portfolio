import React from "react";

const Card = ({ imgSrc, title, description, url }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-heading">{title}</h2>
        <p className="card-paragraph">{description}</p>
        <a href={url} className="card-button" target="blank">
          Live Preview
        </a>
      </div>
    </div>
  );
};

export default Card;
