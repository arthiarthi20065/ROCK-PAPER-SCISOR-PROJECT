const choices = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');
const resetBtn = document.getElementById('resetBtn');

const options = ['rock', 'paper', 'scissors'];

choices.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        const computerChoice = options[Math.floor(Math.random() * options.length)];

        playerChoiceDisplay.textContent = `Your Choice: ${playerChoice}`;
        computerChoiceDisplay.textContent = `Computer Choice: ${computerChoice}`;
        winnerDisplay.textContent = `Winner: ${getWinner(playerChoice, computerChoice)}`;
    });
});

resetBtn.addEventListener('click', () => {
    playerChoiceDisplay.textContent = `Your Choice: -`;
    computerChoiceDisplay.textContent = `Computer Choice: -`;
    winnerDisplay.textContent = `Winner: -`;
});

function getWinner(player, computer) {
    if(player === computer) return 'Draw';
    if(
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) return 'You Win!';
    return 'Computer Wins!';
}