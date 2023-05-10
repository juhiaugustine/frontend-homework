import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

class Search extends Component {
  state = {
    characters: [],
    filteredCharacter: {},
  };
  componentDidMount() {
    axios.get(`https://thronesapi.com/api/v2/Characters`).then((res) => {
      const characters = res.data;
      let set = new Set();
      let characterObjects = [];
      characters.forEach((character) => {
        if (!set.has(character.fullName)) {
          let characterObject = {};
          characterObject.label = character.fullName;
          characterObject.imageURL = character.imageUrl;
          characterObjects.push(characterObject);
          set.add(character.fullName);
        }
      });
      this.setState({ characters: characterObjects });
    });
  }

  render() {
    const characterName = this.state.filteredCharacter.label;
    const shouldShowCharacter =
      Object.keys(this.state.filteredCharacter).length > 0;
    console.log(shouldShowCharacter);
    console.log(this.state.filteredCharacter);
    return (
      <div className="center">
        <h1>
          <center>Search for a Game of Thrones Character</center>
        </h1>
        <Autocomplete
          className="center"
          disablePortal
          id="searchBar"
          options={this.state.characters}
          sx={{ width: 300 }}
          onInputChange={async (event, value) => {
            if (value === "") {
              this.setState({ filteredCharacter: {} });
              return;
            }
            this.state.characters.forEach((character) => {
              if (character.label === value) {
                this.setState({ filteredCharacter: character });
              }
            });
          }}
          renderInput={(params) => (
            <TextField {...params} label="Character Name" />
          )}
        />
        {shouldShowCharacter && (
          <div>
            <h2>{characterName}</h2>
            <img
              src={this.state.filteredCharacter.imageURL}
              alt={`Headshot of ${characterName}`}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
