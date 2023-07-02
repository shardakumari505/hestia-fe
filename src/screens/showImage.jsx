import React from "react";
import "./showimage.scss";

const ShowImage = ({ images }) => {
  return (
    <div className="image-container">
      {images.map((image) => (
        <img key={image.id} className="image" src={image.src} alt="" />
      ))}
    </div>
  );
};

export default ShowImage;
