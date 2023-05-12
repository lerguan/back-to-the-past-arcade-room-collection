document.addEventListener('DOMContentLoaded', () => {
    getGames()
})


function getGames() {
    fetch('http://localhost:3000/gameList')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(gameData => gameCard(gameData))
    })
}

function gameCard(gameData) {
    
} 