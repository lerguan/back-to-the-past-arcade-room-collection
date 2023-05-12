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
    let newFlyer = document.createElement('img')
    newFlyer.src = `${gameData.flyer}`

    let gameDetailCard = document.createElement('div')
    gameDetailCard.className = 'game-card'
    gameDetailCard.setAttribute('hidden', true)

    let newH2 = document.createElement('h2')
    newH2.setAttribute('class', 'name')
    newH2.innerText = `${gameData.name}` + '  (' +  `${gameData.releasedate}` + ')'

    let btn = document.createElement('button')
    btn.class = 'close-button'
    btn.innerText ="X"

    let newGamePlayImg = document.createElement('img')
    newGamePlayImg.src = `${gameData.image}`

    let newH3 = document.createElement('h3')
    newH3.setAttribute('class', 'players')
    newH3.innerText = `${gameData.players}` + ' player(s)'

    gameDetailCard.appendChild(newH2)
    gameDetailCard.appendChild(newGamePlayImg)
    gameDetailCard.appendChild(newH3)
    gameDetailCard.appendChild(btn)

    let newGameContainer = document.createElement('div')
    newGameContainer.setAttribute('class', 'game-container')
    newGameContainer.appendChild(newFlyer)
    document.querySelector('body').appendChild(gameDetailCard)

    let yearLabel = document.getElementById(`year-${year}`)
    yearLabel.append(newGameContainer)
    
    newFlyer.addEventListener('click', () =>{
        gameDetailCard.hidden = !gameDetailCard.hidden
        document.querySelector('#game-detail').style.opacity = '0.5'
    })

    btn.addEventListener('click', () => {
        gameDetailCard.hidden = !gameDetailCard.hidden
        document.querySelector('#game-detail').style.opacity = '1'
    })
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
