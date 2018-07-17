const data = [
  {
    name: 'John',
    games: [116, 94, 123]
  },
  {
    name: 'Mike',
    games: [89, 120, 103]
  },
  {
    name: 'Mary',
    games: [97, 134, 105]
  },
  {
    name: 'Steve',
    games: [197, 159, 205]
  }
];

let winner;
let averageScores = [];

const average = data => {
  data.forEach((team, index) => {
    let currentTotal = 0; // intialize a runnint total for the average
    // calcularte the average
    team.games.forEach(item => {
      currentTotal += item;
      console.log(currentTotal);
      return (team.average = (currentTotal / team.games.length).toPrecision(4));
    });
    // reset the running total for aeach itiration
    currentTotal = 0;

    // find the largest average
    averageScores.push(team.average);
    averageScores.reduce((previousValue, currentValue) => {
      return previousValue > currentValue
        ? (winner = previousValue)
        : (winner = currentValue);
    }, 0);
  });
};

const showWinner = (data, averageScores) => {
  average(data);
  winnerIndex = averageScores.indexOf(winner);
  console.log(
    `The winning team is ${
      data[winnerIndex].name
    } with an average team score of ${winner}`
  );
};

showWinner(data, averageScores);
