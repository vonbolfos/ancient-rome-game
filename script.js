// script.js - Maximus and Livia's Roman Adventure (Professional UI Version with Images & Canvas)

// Create main game container
const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container");
document.body.appendChild(gameContainer);

gameContainer.innerHTML = `<h1 class='title'>Maximus and Livia's Roman Adventure</h1>`;
gameContainer.innerHTML += `<p class='intro-text'>Embark on an epic journey through Ancient Rome! Choose a chapter to begin your adventure.</p>`;

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
    container.innerHTML = "<p>Click the glowing magic coin to start your adventure!</p>";
    
    // Add Background Image
    const bgImage = document.createElement("img");
    bgImage.src = "magic_coin_background.jpg";
    bgImage.classList.add("background-image");
    container.appendChild(bgImage);
    
    // Create Canvas for Magic Coin Effect
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;
    canvas.classList.add("coin-canvas");
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    
    // Draw Magic Coin
    function drawCoin() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "gold";
        ctx.beginPath();
        ctx.arc(150, 150, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "darkgoldenrod";
        ctx.lineWidth = 5;
        ctx.stroke();
    }
    drawCoin();
    
    // Click Event for Coin
    canvas.onclick = () => {
        canvas.style.animation = "spin 1s linear";
        setTimeout(() => alert("You found the magic coin! The adventure begins!"), 1000);
    };
}

console.log("Game script upgraded with images & canvas! Save as script.js and include in your HTML.");