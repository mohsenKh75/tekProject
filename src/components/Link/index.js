import React from "react";
import { Link as BaseLink } from "react-router-dom";

function Link({ url, title, children }) {
  return (
    <BaseLink className="text-secondary text-decoration-none" to={url}>
      {title || children}
    </BaseLink>
  );
}

export default Link;
