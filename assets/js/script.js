/* Author: */
var input = document.querySelector("#word-input");
input.addEventListener('keypress',createButtons);

function createButtons() {
  var inputValue = document.getElementById("word-input").value;
  var words = inputValue.split(",");
  console.log(words);
  var container = document.getElementById("buttons-container");
  container.innerHTML = "";

  words.forEach(function(word) {
    var button = document.createElement("button");
    button.textContent = word.trim();
    console.log(button.textContent);
    button.className = "word-button";
    container.appendChild(button);
  });
}