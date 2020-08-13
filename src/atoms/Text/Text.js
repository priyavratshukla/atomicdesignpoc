import React from "react";
import { css } from 'emotion';

const Text = ({ text, type, gutterBottom }) => {
  return (
    <span className={css`display:inline-block`, `text ${type} ${gutterBottom ? "gutterBottom" : ""}`}>
     {text}
    </span>
  );
};

export default Text;