


const CHOICES =[
    {
        name: 'rock',
        uri: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png',
    },
    {
        name: 'paper',
        uri: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png',
    },
    {
        name: 'scissors',
        uri: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png',
    },
]
const getRoundOutcome =(userChoice , computerChoice) => {
    let result;
    
    if (userChoice.name === 'rock') {
      result = computerChoice.name === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice.name === 'paper') {
      result = computerChoice.name === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice.name === 'scissors') {
      result = computerChoice.name === 'paper' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice.name === computerChoice.name) result = 'Tie game!';
    return [result];
  };

export {CHOICES, getRoundOutcome};