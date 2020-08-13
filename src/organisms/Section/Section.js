import React from "react";
import { FlexItem } from "../../atoms/Flex/Flex";
import SingleTileListing from "../SingleTileListing/SingleTileListing";
import { retrivedObj } from '../../actions';

const Section = ({ data = retrivedObj}) => {
  return (
    <>
        {data.map(
          (
            {
              id,
              image,
              name,
              created,
              origin,
              status,
              gender,
              species
            },
            index
          ) => (
            <FlexItem  key={index}>
              <SingleTileListing
                id={id}
                image={image}
                name={name}
                created={created}
                origin={origin.name}
                status={status}
                gender={gender}
                species={species}
              />
            </FlexItem>
          )
        )}
    </>
  );
};

export default Section;
