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
  }
];

let winner;
let averageScores = [];

const average = data => {
  data.forEach((team, index) => {
    // calcularte the average
    team.games.forEach(item => {
      let total = 0;
      total += item;
      return (team.average = (total / team.games.length).toPrecision(4));
    });

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
