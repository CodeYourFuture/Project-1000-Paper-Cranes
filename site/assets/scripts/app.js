// hide all the tools
const hideAll = () => {
  const allTools = document.querySelectorAll(".tool");
  allTools.forEach((tool) => {
    tool.classList.add("hidden");
    tool.setAttribute("hidden", "true");
  });
};
const listOfTools = [
  "assets",
  "css",
  "deployment",
  "generator",
  "html",
  "javascript",
];
// get a random combination of tools
const pickRandom = (options) =>
  options[Math.floor(Math.random() * options.length)];

const getRandomCombination = () => {
  const shuffledTools = listOfTools.sort(() => Math.random() - 0.5);
  return shuffledTools.map((option) => {
    const options = document.querySelectorAll(`.${option}`);
    return pickRandom(options);
  });
};

// run the selection, so we can rerun it if we end up with an empty selection
const runSelection = (isBasic) => {
  // hide all the tools
  hideAll();
  randomiseCranes();
  let randomCombination = getRandomCombination();
  //if basic is true, filter out all the options with data-advanced="true"
  if (isBasic) {
    randomCombination = randomCombination.filter((item, index) => {
      return item.dataset.advanced !== "true" && index < 3;
    });
  }
  // if the selection is empty, rerun the selection
  if (!randomCombination.length) runSelection(isBasic);
  else {
    // show the selection
    randomCombination.forEach((item) => {
      document.getElementById(item.id).classList.remove("is-hidden");
      document.getElementById(item.id).removeAttribute("hidden");
    });
  }
};
// on page load, hide all
window.addEventListener("load", hideAll);
// on click of the button challenge, hide all items and show a new random selection
const challengeButton = document.getElementById("challenge");
const advancedButton = document.getElementById("advanced");
challengeButton.addEventListener("click", () => {
  runSelection(true);
});
advancedButton.addEventListener("click", () => {
  runSelection(false);
});

// DESIGN STUFF

// random crane colors
function randomiseCranes() {
  const style = document.createElement("style");
  style.textContent = `body, html {--crane-color: hsla(${Math.floor(
    Math.random() * 360,
    3
  )}, 100%, 90%, 90%)};}`;

  document.head.appendChild(style);
}

window.addEventListener("load", randomiseCranes);
