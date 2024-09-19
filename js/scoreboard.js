
// Function to change the score for a given team
function changeScore(team, points) {
    let scoreElement = document.getElementById('score' + team.charAt(4));
    let currentScore = parseInt(scoreElement.textContent);
    currentScore += points;
    
    if (currentScore < 0) {
        currentScore = 0;  // Prevent negative scores
    }
    
    scoreElement.textContent = currentScore;
}

// Function to reset the scores to 0
function resetScores() {
    document.getElementById('score1').textContent = 0;
    document.getElementById('score2').textContent = 0;
}