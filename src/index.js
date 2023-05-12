document.addEventListener('DOMContentLoaded', () => {
    getGames()
    addNewGame()
})

let yearList = ['1980s', '1990s', '2000s']
function getGames() {
    for (let i of yearList) {
        fetch(`http://localhost:3000/${i}`)
        .then(resp => resp.json())
        .then((data) => {
            data.forEach((gameData) => {
            handleOneGameCard(gameData, i)
        })
        })
    }
}

function handleOneGameCard(gameData, year) {
    let newImg = document.createElement('img')
    newImg.src = `${gameData.flyer}`
    let newH2 = document.createElement('h2')
    newH2.setAttribute('class', 'name')
    newH2.innerText = `${gameData.name}`
    let newGameContainer = document.createElement('div')
    newGameContainer.setAttribute('class', 'game-container')
    newGameContainer.appendChild(newImg)
    // newGameContainer.appendChild(newH2)
    let yearLabel = document.getElementById(`year-${year}`)
    yearLabel.append(newGameContainer)
}

function addNewGame() {
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        const newGame = {
            "name": e.target.title.value,
            "image": e.target.image.value,
            "flyer": e.target.flyer.value,
            "releasedate": e.target['release-date'].value,
            "players": e.target.players.value
        }
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newGame)
        }
        for (let year of yearList) {
            if (Math.floor(newGame.releasedate / 10) === parseInt(year.slice(0,3))) {
                fetch(`http://localhost:3000/${year}`, configObj)
                .then((resp) => resp.json())
                .then((data) => {
                    handleOneGameCard(data, year)
                })
            }
        }
    })
}
