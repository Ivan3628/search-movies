import React, { Fragment } from "react";
import alternative from "./alternative.png";

const AlternativeImage = () => {
  return (
    <Fragment>
      <img
        src={alternative}
        alt="alternative image"
        className="w-full block content-center p-4"
      />
    </Fragment>
  );
};

export default AlternativeImage;
