import React from "react";

function Image({ src, alt, width = "100%", height = "auto", className }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      style={{ width: `${width}`, height: `${height}` }}
    />
  );
}

export default Image;
