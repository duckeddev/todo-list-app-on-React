import React from "react";

const Button = ({ bootstrapStyle, name }) => (
  <button type="button" className={bootstrapStyle}>
    {name}
  </button>
);

export default Button;
