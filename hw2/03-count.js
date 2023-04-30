const keywordsInput = document.getElementById("keyword_input");
const sentences = document.getElementById("sentences");

const handleKeyDown = () => {
  const input = keywordsInput.value.trim();
  let text = sentences.textContent.trim();
  const words = text.split(" ");

  const highlightedWords = words.map((word) => {
    if (word.toLowerCase() === input.toLowerCase()) {
      word = `<span style="background-color: yellow">${word}</span>`;
    }
    return word;
  });

  sentences.innerHTML = highlightedWords.join(" ");
};

keywordsInput.addEventListener("input", handleKeyDown);
