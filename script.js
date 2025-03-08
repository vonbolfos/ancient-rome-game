// script.js - JavaScript for Maximus and Livia's Roman Adventure

// Select the main game container
const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container");
document.body.appendChild(gameContainer);

gameContainer.innerHTML = `<h1 class='title'>Maximus and Livia's Roman Adventure</h1>`;

const chapters = [
    "The Magic Coin", "Welcome to Ancient Rome!", "The Roman Forum",
    "The Colosseum – Gladiators in Action!", "A Day in the Life of a Roman Child",
    "Bathhouses and Aqueducts – Engineering Marvels", "The Marketplace – A Feast for the Senses!",
    "A Visit to the Pantheon – Gods and Myths", "The Mystery of the Missing Scroll",
    "The Emperor’s Palace – A Sneak Peek at Power", "A Roman Feast – Tasting History",
    "The Chariot Race – A Thrilling Spectacle", "Trouble in the City – Laws and Punishments",
    "Escaping the Great Fire", "Returning Home – The Magic Coin’s Final Glow"
];

const chapterMenu = document.createElement("div");
chapterMenu.classList.add("chapter-menu");
chapterMenu.innerHTML = "<h2>Select a Chapter</h2>";
gameContainer.appendChild(chapterMenu);

chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.classList.add("chapter-button");
    button.textContent = `${index + 1}. ${chapter}`;
    button.onclick = () => startChapter(index);
    chapterMenu.appendChild(button);
});

function startChapter(index) {
    gameContainer.innerHTML = `<h1 class='title'>${chapters[index]}</h1>`;
    const gameDescription = document.createElement("p");
    gameDescription.classList.add("game-description");
    gameDescription.textContent = getGameDescription(index);
    gameContainer.appendChild(gameDescription);
    const gameArea = document.createElement("div");
    gameArea.classList.add("game-area");
    gameContainer.appendChild(gameArea);
    startMiniGame(index, gameArea);
    const backButton = document.createElement("button");
    backButton.classList.add("back-button");
    backButton.textContent = "Back to Menu";
    backButton.onclick = () => location.reload();
    gameContainer.appendChild(backButton);
}

function getGameDescription(index) {
    const descriptions = [
        "Find the glowing magic coin to begin your journey!",
        "Navigate through the streets of Ancient Rome!",
        "Answer trivia questions about the Roman Forum!",
        "Win a quick reaction duel as a gladiator!",
        "Complete daily chores in a memory challenge!",
        "Fix the aqueduct pipes in a puzzle challenge!",
        "Barter with merchants in a trading game!",
        "Match gods to their symbols in a mythology quiz!",
        "Find the missing scroll in a hidden object game!",
        "Sneak past guards in a stealth challenge!",
        "Prepare a Roman feast in a cooking mini-game!",
        "Win the chariot race by avoiding obstacles!",
        "Make legal decisions in a moral dilemma game!",
        "Escape the Great Fire by dodging falling debris!",
        "Solve the puzzle to activate the magic coin!"
    ];
    return descriptions[index] || "Start your adventure!";
}

function startMiniGame(index, gameArea) {
    switch (index) {
        case 0:
            coinHuntGame(gameArea);
            break;
        case 2:
            triviaGame(gameArea);
            break;
        default:
            gameArea.innerHTML = "Mini-game coming soon!";
    }
}

function coinHuntGame(container) {
    container.innerHTML = "Click the magic coin to start!";
    const coin = document.createElement("button");
    coin.textContent = "Magic Coin";
    coin.classList.add("coin-button");
    coin.onclick = () => alert("You found the magic coin! The adventure begins!");
    container.appendChild(coin);
}

function triviaGame(container) {
    container.innerHTML = "Who was the first Emperor of Rome?";
    const answer = document.createElement("input");
    answer.type = "text";
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.classList.add("submit-button");
    submit.onclick = () => {
        if (answer.value.toLowerCase() === "augustus") {
            alert("Correct! You advance to the next stage.");
        } else {
            alert("Try again!");
        }
    };
    container.appendChild(answer);
    container.appendChild(submit);
}

console.log("Game script ready! Save as script.js and include in your HTML.");