// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";
const charactersElement = document.getElementById("characters");

fetch(url)
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const characterElement = document.createElement("div");
      characterElement.classList.add("character");

      const characterImage = document.createElement("img");
      characterImage.src = character.imageUrl;
      characterImage.alt = `${character.fullName} image`;
      characterImage.classList.add("character-image");

      const characterName = document.createElement("h2");
      characterName.textContent = character.fullName;
      characterName.classList.add("character-name");

      const characterTitle = document.createElement("h3");
      characterTitle.textContent = character.title;
      characterTitle.classList.add("character-title");

      characterElement.appendChild(characterImage);
      characterElement.appendChild(characterName);
      characterElement.appendChild(characterTitle);

      charactersElement.appendChild(characterElement);
    });
  })
  .catch((error) => console.error(error));
