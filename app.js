const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-game-container');

const nameForm = document.getElementById('name-form');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

const pastGames = [];

let currentGame = { 
    name1: '',
    name2: '',
    score1: 0,
    score2: 0
};

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(nameForm);

    const name1 = data.get ('team-one');
    const name2 = data.get ('team-two');

    currentGame.name1 = name1;
    currentGame.name2 = name2;

    nameForm.reset();
    displayCurrentGameEl();
});

teamOneAddButton.addEventListener('click', () => {
    currentGame.score1++;

    displayCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
    currentGame.score2++;

    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    currentGame.score1--;

    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    currentGame.score2--;

    displayCurrentGameEl();
});

function displayCurrentGameEl() {
    currentGameEl.textContent = '';

    teamOneLabel.textContent = currentGame.name1;
    teamTwoLabel.textContent = currentGame.name2;

    const gameEl = renderGame(currentGame);

    gameEl.classList.add('current');

    currentGameEl.append(gameEl);
}

function displayAllGames() {
    pastGamesEl.textContent = '';

    for (let game of pastGames) {
        const gameEl = renderGame(game);

        gameEl.classList.add('past');
    
        pastGamesEl.append(gameEl);
    }
}

finishGameButton.addEventListener('click', () => {
    pastGames.push(currentGame);

    displayAllGames();

    currentGame = {
        name1: '',
        name2: '',
        score1: 0,
        score2: 0
    };

    displayCurrentGameEl();
});

window.addEventListener('load', async () => {
    const games = await getGames();

    if (games) {
        pastGames = games;

        displayAllGames();
    }
});