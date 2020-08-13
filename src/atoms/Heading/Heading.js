import React from "react";
import { css } from 'emotion';

const Heading = ({ text, type, gutterBottom }) => {
  return (
    <h2 className={css`
    margin-top: -65px;
    background: #000;
    padding: 10px;
    z-index: 1;
    position: relative;
    opacity: .5;
    h2{
        padding: 0;
        margin: 0;
        font-size: larger;
    }
`, `text ${type} ${gutterBottom ? "gutterBottom" : ""}`}>
      {text}
    </h2>
  );
};

export default Heading;