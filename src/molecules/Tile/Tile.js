import React from "react";
import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import IMGPLACEHOLDER from '../../images/image-placeholder.jpeg';
import { css } from 'emotion';

const Tile = ({
  image,
  created,
  status,
  species,
  gender,
  name,
  origin
}) => {
  return (
    <>
      <img
        src={
          image
            ? image
            : IMGPLACEHOLDER
        }
        alt={image}
        className={css`border-radius: 10px;`}
      />

      <div className="">
        <Heading type="subheading" text={name} />
        <p>
            <Text type="span" text={created} />
        </p>
      </div>
      <div className={css`
                padding: 10px 10px 0;
                font-size: 10px;
                p{
                    padding: 5px 0 10px;
                    margin: 10px 0 10px;
                    border-bottom: solid 1px dimgray;
                    span:nth-child(1){
                        text-transform: uppercase;
                    }
                    span:nth-child(2){
                        float:right;
                    }
                }
            `}>
        <p>
            <Text type="paragraph" text="Status" />
            <Text type="paragraph" text={status} />
        </p>
        <p>
            <Text type="paragraph" text="Species" />
            <Text type="paragraph" text={species} />
        </p>
        <p>
            <Text type="paragraph" text="Gender" />
            <Text type="paragraph" text={gender} />
        </p>
        <p>
            <Text type="paragraph" text="Origin" />
            <Text type="paragraph" text={origin} />
        </p>
        <p>
            <Text type="paragraph" text="Last Location" />
            <Text type="paragraph" text={origin} />
        </p>
        </div>
    </>
  );
};

export default Tile;
