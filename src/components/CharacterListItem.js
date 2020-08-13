import React, { Component } from "react";

export default class CharacterListItem extends Component {
  render = () => {
    const { character } = this.props;
    return (
        <div alignItems="center">
            <img src={character.image} borderRadius="100%" height="5rem" />
            <h3>
                {character.name}
            </h3>
        </div>
    );
  };
}
