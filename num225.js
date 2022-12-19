let number = 10;
let games = [
  [0, 5, 2, 2], // Team 0 - Team 5 => 2:2
  [1, 4, 0, 2], // Team 1 - Team 4 => 0:2
  [2, 3, 1, 2], // Team 2 - Team 3 => 1:2 *
  [1, 5, 2, 2], // Team 1 - Team 5 => 2:2
  [2, 0, 1, 1], // Team 2 - Team 0 => 1:1
  [3, 4, 1, 1], // Team 3 - Team 4 => 1:1 *
  [2, 5, 0, 2], // Team 2 - Team 5 => 0:2
  [3, 1, 1, 1], // Team 3 - Team 1 => 1:1 *
  [4, 0, 2, 0], // Team 4 - Team 0 => 2:0
];

/*
https://sinyakov.com/frontend/problems.html
https://www.codewars.com/kata/5e0baea9d772160032022e8c
Rank	Team	   For : Against	GD Points
1.	    Team 4	    5 : 1	    +4	5
2.	    Team 5	    6 : 4	    +2	4
3.	    Team 3	    4 : 3	    +1	4
4.	    Team 0	    3 : 5	    -2	2
4.	    Team 1	    3 : 5	    -2	2
6.	    Team 2	    2 : 5	    -3	1
*/

console.log(tableTeams(games, number));

function tableTeams(games, number) {
  //console.log(games, number);

  const arrComands = [];

  for (let i = 0; i < number; i++) {
    arrComands.push({
      // rank: 0,
      team: i,
      points: 0,
      goals: 0,
      diff: 0,
      rang: 0,
    });
  }
  console.log("***");
  for (const [teamA, teamB, scoreA, scoreB] of games) {
    //console.log("---*-", teamA, teamB, scoreA, scoreB);
    //console.log(arrComands);

    arrComands[teamA]["goals"] += scoreA;

    arrComands[teamB]["goals"] += scoreB;

    if (scoreA > scoreB) {
      arrComands[teamA].points += 2;
    } else if (scoreA < scoreB) {
      arrComands[teamB].points += 2;
    } else if (scoreA === scoreB) {
      arrComands[teamA].points += 1;
      arrComands[teamB].points += 1;
    }

    arrComands[teamA].diff += scoreA - scoreB;
    arrComands[teamB].diff += scoreB - scoreA;
  }
  //console.log(...arrComands);

  function compare(a, b) {
    const diffPoints = b.points - a.points;
    if (diffPoints !== 0) {
      return diffPoints;
    }
    const diffDiffs = b.diff - a.diff;
    if (diffDiffs !== 0) {
      return diffDiffs;
    }
    const diffGoals = b.goals - a.goals;
    return diffGoals;
  }

  arrComands.sort(compare);

  console.table(arrComands);

  for (let i = 0; i < arrComands.length; i++) {
    console.log(i, arrComands[i]);
    if (i !== 0 && compare(arrComands[i], arrComands[i - 1]) === 0) {
      arrComands[i].rang = arrComands[i - 1].rang;
      continue;
    }
    arrComands[i].rang = i + 1;
  }

  console.table(arrComands);

  console.log(arrComands.map((item) => item.rang));

  return arrComands.map((item) => item.rang);

  //console.log(...arrSort);
} //f

/*

Rank	Team	   For : Against	GD Points
1.	    Team 4	    5 : 1	    +4	5      1
2.	    Team 5	    6 : 4	    +2	4      2
3.	    Team 3	    4 : 3	    +1	4      3
4.	    Team 0	    3 : 5	    -2	2      4
4.	    Team 1	    3 : 5	    -2	2      4
6.	    Team 2	    2 : 5	    -3	1      6
*/
