const teams = [
    { name: 'Amad', gamesPlayed: 5, wins: 1, draws: 0 },
    { name: 'Renas', gamesPlayed: 6, wins: 4, draws: 0 },
    { name: 'Habib', gamesPlayed: 4, wins: 1, draws: 0 },
    { name: 'Anjam', gamesPlayed: 6, wins: 2, draws: 0 },
    { name: 'Aram Adil', gamesPlayed: 2, wins: 1, draws: 0 },
    { name: 'Pala', gamesPlayed: 5, wins: 3, draws: 0 },
    { name: 'Wjar', gamesPlayed: 3, wins: 1, draws: 0 },
    { name: 'Redan', gamesPlayed: 5, wins: 2, draws: 0 },
    { name: 'Aram abd', gamesPlayed: 6, wins: 4, draws: 0 },
    { name: 'Gailan', gamesPlayed: 6, wins: 2, draws: 0 },
    { name: 'Sahand', gamesPlayed: 6, wins: 2, draws: 0 },
    { name: 'Hndren', gamesPlayed: 3, wins: 2, draws: 0 },
  ];
  
  
  let position = 1;
  
  window.onload = function () {
    const table = document.getElementById('leagueTable');
  
    // Sort teams by points
  //   teams.sort((a, b) => calculatePoints(b) - calculatePoints(a));
  teams.sort((a, b) => calculatePointsPerGame(b) - calculatePointsPerGame(a));
  
    teams.forEach(team => {
      const newRow = table.insertRow(-1);
      const positionCell = newRow.insertCell(0);
      const teamCell = newRow.insertCell(1);
      const gamesPlayedCell = newRow.insertCell(2);
      const winsCell = newRow.insertCell(3);
      const drawsCell = newRow.insertCell(4);
      const lossesCell = newRow.insertCell(5);
      const pointsCell = newRow.insertCell(6);
      const pointsPerGameCell = newRow.insertCell(7);
  
      positionCell.textContent = position;
      teamCell.textContent = team.name;
      gamesPlayedCell.textContent = team.gamesPlayed;
      winsCell.textContent = team.wins;
      drawsCell.textContent = team.draws;
      lossesCell.textContent = calculateLosses(team);
      pointsCell.textContent = calculatePoints(team);
      pointsPerGameCell.textContent = calculatePointsPerGame(team);
      position++;
    });
  };
  
  function calculateLosses(team) {
    return team.gamesPlayed - team.wins - team.draws;
  }
  
  function calculatePoints(team) {
    return team.wins * 3 + team.draws;
  }
  
  function calculatePointsPerGame(team){
      return ((team.wins * 3 + team.draws)/team.gamesPlayed)+(team.gamesPlayed/10);
  }
  
  