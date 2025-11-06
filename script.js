// Function to cast a vote for a candidate
function vote(candidate) {
    let votes = JSON.parse(localStorage.getItem('votes')) || {PETEROBI: 0, TINUBU: 0};
    votes[candidate]++;
    localStorage.setItem('votes', JSON.stringify(votes));
    alert(`You voted for Candidate ${candidate}.`);
}

// Function to display the current results
function displayResults() {
    const resultsDisplay = document.getElementById('results-display');
    const votes = JSON.parse(localStorage.getItem('votes')) || {PETEROBI: 0, TINUBU: 0};
    resultsDisplay.innerHTML = `
        <div>PETER OBI: ${votes.PETEROBI} votes</div>
        <div>AHMED TINUBU: ${votes.TINUBU} votes</div>
    `;
}

// Function to reset the poll
function resetVotes() {
    localStorage.removeItem('votes');
    alert('Poll has been reset.');
    displayResults(); // Clear displayed results
}

// Initial display of results
window.onload = displayResults;
