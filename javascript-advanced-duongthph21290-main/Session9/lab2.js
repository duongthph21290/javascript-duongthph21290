for (const [i, player] of game.score.entries())
console.log(`goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds ) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)){
    const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(` odd of ${teamstr}  ${odd}`);
}