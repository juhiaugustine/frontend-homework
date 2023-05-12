import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Search() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacter, setFilteredCharacter] = useState({});

  useEffect(() => {
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
      setCharacters(characterObjects);
    });
  }, []);

  const characterName = filteredCharacter.label;
  const shouldShowCharacter = Object.keys(filteredCharacter).length > 0;

  return (
    <div className="center">
      <h1>
        <center>Search for a Game of Thrones Character</center>
      </h1>
      <Autocomplete
        className="center"
        disablePortal
        id="searchBar"
        options={characters}
        sx={{ width: 300 }}
        onInputChange={async (event, value) => {
          if (value === "") {
            setFilteredCharacter({});
            return;
          }
          characters.forEach((character) => {
            if (character.label === value) {
              setFilteredCharacter(character);
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
            src={filteredCharacter.imageURL}
            alt={`Headshot of ${characterName}`}
          />
        </div>
      )}
    </div>
  );
}

export default Search;
