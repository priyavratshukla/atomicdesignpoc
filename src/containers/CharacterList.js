import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchCharacters } from "../actions/characters";
import CharacterListItem from "../components/CharacterListItem";

class CharacterList extends Component {
  componentDidMount = () => {
    const { fetchCharacters } = this.props;
    fetchCharacters();
    console.log('this.props in CharacterList..', this.props.fetchCharacters());
  };

  render = () => {
    const { characters, err, isLoading } = this.props;
    return (
      <Fragment>
        <h2>Rick & Morty Characters</h2>
        <hr />
        {isLoading && !characters && <p>Loading...</p>}
        {characters && (
          <Fragment>
            {characters.results.length === 0 && (
              <p>No characters</p>
            )}
            {characters.results.map(character => (
              <CharacterListItem key={character.id} character={character} />
            ))}
          </Fragment>
        )}
        {err && <div>An error occurred. Message: {err.message}</div>}
      </Fragment>
    );
  };
}

const mapStateToProps = state => ({
  characters: state.characters.data,
  err: state.characters.err,
  isLoading: state.characters.isLoading
});
const mapDispatchToProps = {
  fetchCharacters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
