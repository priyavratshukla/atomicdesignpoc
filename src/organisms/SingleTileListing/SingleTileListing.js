import React from "react";
import Tile from "../../molecules/Tile/Tile";
import { css } from 'emotion';

const color = '#fff';
const  bgColor = '#333';

const SingleTileListing = ({
  image,
  id,
  created,
  status,
  species,
  gender,
  name,
  origin
}) => {
  return (
    <div className={css`
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    border-radius: 10px;
    background: ${bgColor};
    margin: 10px 0;
    color: ${color};
`}>
      <Tile
        image={image}
        id={id}
        name={name}
        status={status}
        created={created}
        species={species}
        gender={gender}
        origin={origin}
      />
    </div>
  );
};

export default SingleTileListing;
