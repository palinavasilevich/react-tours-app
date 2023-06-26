import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const showMore = () => {
    setReadMore(true);
    setText(info);
  };

  const showLess = () => {
    setReadMore(false);
    setText(`${info.slice(0, 30)}...`);
  };

  return (
    <li className="single-tour">
      <span className="tour-price">${price}</span>
      <img src={image} alt="name" className="img" />
      <div className="tour-info">
        <h5 className="title">{name}</h5>
        <p>
          {!readMore ? `${info.substring(0, 200)}...` : info}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {!readMore ? "read more" : "show less"}
          </button>
        </p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </li>
  );
};

export default Tour;
