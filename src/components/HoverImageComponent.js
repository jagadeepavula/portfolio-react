import React, { useState } from "react";

const HoverImageComponent = ({ imageSrc, alt, className, text }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
      style={{ overflow: "visible", position: "relative" }}
    >
      {text}
      <img
        src={imageSrc}
        alt={alt}
        className={`absolute z-10 rounded-xl transition-all duration-500 ease-in-out w-48 h-auto ${
          isHovering ? "block" : "hidden"
        }`}
        style={{ left: "-10px", top: "-50px" }} // Adjust left and top positions
      />
    </div>
  );
};

export default HoverImageComponent;

/* <HoverImageComponent
                    imageSrc={designedImage}
                    alt="Designed Image"
                    className="inline-block"
                    text="Make me an offer i
              can't refuse!"
                  />  copy and paste this and import images as needed in the components*/
